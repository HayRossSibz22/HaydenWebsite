import { useEffect } from 'react';
interface UnityInstanceConfig {
    dataUrl: string;
    frameworkUrl: string;
    codeUrl: string;
  }
  
  interface ExtendedWindow extends Window {
    createUnityInstance: (container: Element, config: UnityInstanceConfig) => void;
  }
  
  declare let window: ExtendedWindow;

const UnityGame = () => {
  useEffect(() => {
    // This script will handle the initialization of the Unity instance
    const script = document.createElement('script');
    script.src = '../Snake/Build/WebSnake.loader.js';
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
        const unityContainer = document.getElementById("unityContainer");
        if (typeof window.createUnityInstance === "function" && unityContainer !== null) {
          window.createUnityInstance(unityContainer, {
            dataUrl: "../Snake/Build/WebSnake.data.br",
            frameworkUrl: "../Snake/Build/WebSnake.framework.js.br",
            codeUrl: "./Snake/Build/WebSnake.wasm.br",
          });
        }
      };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="unityContainer" style={{ width: '960px', height: '900px' }}></div>
  );
};

export default UnityGame;