    import circle from "circle";
    import circle2 from "lib-root/circle.js";
    console.log(circle())
        try{

            console.log(import.meta.resolve('lib-root/a.js'))
        }catch( err ){
            console.error(err.message)
        }
