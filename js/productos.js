const resinas = [
    {id:1, nombre:"ULTRA FLOW", descripcion:"RESINA COMPUESTA DE BAJA VISCOSIDAD FOTOCURABLE 2G", imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/010/014/products/difusion-31-95e183076cc1509d6b16558368285536-320-0.png" , precio:3870},
    {id:2, nombre:"ULTRA FILL", descripcion:"RESINA COMPUESTA FOTOPOLIMERIZABLE RESTAURACIONES", imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/010/014/products/difusion31-8204b5b5d2d3cf5c2616558367005453-320-0.png", precio:2890},
    {id:3, nombre:"FILTEK Z250", descripcion:"RESINA MICROHÍBRIDA JERINGA 4GR 3M", imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/010/014/products/d195909f8f1-7c70190f87a178034616184899464914-320-0.jpg", precio:7650},
    {id:4, nombre:"Z350 XT", descripcion:"RESINA UNIVERSAL 100% NANOTECNOLOGÍA - JERINGA 4GR 3M", imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/010/014/products/captura_de_pantalla_061322_105840_am1-5cd13916c8863fe9be16551287693001-640-0.jpg", precio:21950},
    {id:5, nombre:"LUNA SDI", descripcion:"COMPOSITE NANOHÍBRIDO JERINGA 4GR SDI", imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/010/014/products/d_nq_np_966891-mla44307280016_122020-o1-4681e457a48186f91416274030775260-640-0.jpg", precio:6100},
    {id:6, nombre:"PACK AVÍO IVOCLAR VIVADENT", descripcion:"COMPOSITE TE-ECONOM PLUS INTRO PACK AVÍO IVOCLAR VIVADENT", imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/010/014/products/difusion11-600d0ea2ef31927d3916649071923476-640-0.webp", precio:19900},
    {id:7, nombre:"COMPOSITE FLOW WAVE", descripcion:"COMPOSITE FLOW WAVE 1G SDI", imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/010/014/products/wave11-aa2e0d361dd6b8c48e16273920953879-320-0.jpg", precio:5250},
    {id:8, nombre:"KIT 5 JERINGAS LUNA", descripcion:"KIT 5 JERINGAS COMPOSITE + ADHESIVO + ÁCIDO LUNA SDI", imagen:"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/010/014/products/web-11-f7a6708678e8acc9da16666201909193-640-0.webp", precio:36900},



];

function guardarproductosLS (resinas){

    localStorage.setItem("Resinas", JSON.stringify (resinas));

}
guardarproductosLS (resinas);

function cargarproductosLS (){

    return JSON.parse (localStorage.getItem ("Resinas"));
}