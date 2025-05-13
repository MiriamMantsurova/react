




import {initialize} from "@frontegg/js"

const style = document.createElement('style');
style.setAttribute('type', 'text/css');
style.innerHTML = '';
document.getElementsByTagName('head')[0].appendChild(style);

const app = initialize({
  contextOptions: {
    baseUrl: "https://app-fe8itjcv4qcd.frontegg.com",
    clientId: "7f1c1fd9-8f95-451b-9107-ff1bd10050f6",
    // appId: "feb88326-0bd7-4f6c-bb97-60515c9fea61"
  },
  hostedLoginBox: true
})

document.querySelector('[fe-action="open-admin-portal"]').addEventListener('click', () => {
  app.showAdminPortal()
})