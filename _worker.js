export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        url.hostname="user.qzone.qq.com/1002653489";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
