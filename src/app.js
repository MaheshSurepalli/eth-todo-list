App = {
    load : async ()=>{
        console.log("Connectiong client side application to blockchain");
    }
}

$(window).load(
    ()=>App.load()
);