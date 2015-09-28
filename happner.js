module.exports = {
  // "name":"happner-resources",
  configs: {
    "autoload":{
      "component":{
        name: "happner-resources",
        config: {
          schema:{
            "exclusive":false
          },
          web:{
            routes:{
             "static":"resources"
            } 
          } 
        }
      }
    }
  }
}
