!function (ns, undefined) {

    ns.someNewProperty = 10;

}(comNS("com.infoSupport.someProject.v1.model"));

function comNS(nsString) {
    var obj = window;
    if (nsString) {
        var parts = nsString.split('.');
        for (var i = 0; i < parts.length; i++) {
            obj[parts[i]] = obj[parts[i]] || {};
            obj = obj[parts[i]];
        }    
    } 
    return obj;
}

