/// <reference types="vite/client" />


declare global{
    namespace NodeJS{
        interface ProcessEnv{
            REACT_APP_SERVER_URL : string,
        }
    }
}
process.env.REACT_APP_SERVER_URL = 'http://127.0.0.1:8000'

export {}