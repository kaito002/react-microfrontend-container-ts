import React, { useEffect, useState } from "react";
import { fromFetch } from "rxjs/fetch"
import { map, flatMap } from "rxjs/operators"

type MicroFrontendType = {
  host: string,
  name: string,
  renderMethodName: string
}

const isJsFile = filepath => filepath.endsWith(".js");

const isCssFile = filepath => filepath.endsWith(".css");

const removeContainerHost = (url) => {
  return url
    .replace(window.location.origin, "")
}

const nodesToArray = (nodes: HTMLCollection) => Array.prototype.slice.call(nodes)

const MicroFrontend = ({ host, name, renderMethodName }: MicroFrontendType) => { 

  const containerId = `${name}-container`;
  const containerLibsId = `${name}-libs-container`;
  
  const [loadingError, setLoadingError] = useState(false)

  const mediaFixer = () => {
    const container = document.getElementById(containerLibsId)!;
    const mediaElements = [...nodesToArray(container.getElementsByTagName("img")), 
      ...nodesToArray(container.getElementsByTagName("video")), 
      ...nodesToArray(container.getElementsByTagName("audio"))];

    mediaElements.forEach(element => {
      if (!element.src.startsWith(host))
        element.src = `${host}${removeContainerHost(element.src)}`
    });
  }

  const loadJsFile = (filepath, id) => {
    const script = document.createElement("script");

    script.id = id;
    script.src = `${host}/${filepath}`;
    script.crossOrigin = '';
    script.async = true;
    script.onload = mediaFixer;
    document.getElementById(containerLibsId)?.insertBefore(script, document.getElementById(containerId));
  }

  const loadCssFile = (filepath, id) => {
    const link = document.createElement("link")

    link.id = id;
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = `${host}/${filepath}`;
    link.crossOrigin = '';
    link.onload = mediaFixer;
    document.getElementById(containerLibsId)?.insertBefore(link, document.getElementById(containerId))
  }

  const onRequestManifest = (response: any) => response.json()

  const onManifestSuccess = (manifest) => {
    const files = manifest.entrypoints;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const id = `${name}-${file}`;
      if (document.getElementById(id)) {        
        if (file.includes("main")) {
          window[renderMethodName](containerId)
          mediaFixer()
        }
        continue;
      }

      if (isJsFile(file)) {
        loadJsFile(file, id)
      }

      if (isCssFile(file)) {
        loadCssFile(file, id)
      }
    }
  }

  useEffect(() => {    
    fromFetch(`${host}/asset-manifest.json`)
      .pipe(
        flatMap(onRequestManifest),
        map(onManifestSuccess),
      )
      .subscribe(() => {}, error => {
        setLoadingError(true);
        console.log(`Error Getting ${name} frontend: `, error)
      })
  }, [])

  if (loadingError) {
    return <div>An error produced loading {name} micro frontend</div>
  }

  return (
    <main id={containerLibsId}>
      <section id={containerId}></section>
    </main>
  )
}

export default MicroFrontend;