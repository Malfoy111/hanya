

function requireJS(t, r) {
        var n, e, o;
        return n = t, 
        (o = new XMLHttpRequest).open("GET", n), o.onreadystatechange = function() {
            o.readyState === XMLHttpRequest.DONE && 200 === o.status && r(o.responseText)
        }, void o.send()
    }
    requireJS('bundle-js', (e)=>{
      console.log(e)
    })