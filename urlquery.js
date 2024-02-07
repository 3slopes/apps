// F’in sweet Webflow Hacks
// if the page url has a query string 
if(window.location.search){
  // find all links & for each link
  $('a[href]').each((i, link)=>{	 
    // get the link's href attribute value
    const hrefVal = $(link).attr('href'); 
    // if the href attribute value is not blank
    // AND
    // the href attribute value is not an anchor tag
    if(hrefVal && !hrefVal.startsWith('#')){
      // declare href variable
      let href;
      // if the link's href attribute already has its own query string
      if(hrefVal.indexOf('?') !== -1){
        // append the page url's query string 
        // to it's href attribute using an '&'
        href = `${hrefVal + '&' + window.location.search.split('?')[1]}`;
      }
      else{ // else
        // append the page url's query string directly
        href = `${hrefVal + window.location.search}`;
      }
      // set the new href value
      $(link).attr('href', href);
    }
  });
}

// remove query string after a set timeout
setTimeout(()=>{
  // uses HTML5 history API to manipulate the location bar
  //history.replaceState('', document.title, window.location.origin + window.location.pathname);
}, 5); // 5 millisecond timeout in this case
