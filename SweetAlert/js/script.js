// Arquivo de script vazio 
function ModalSuccess(){
    Swal.fire({
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/img/cat-space.gif)",
        backdrop: `
          rgba(0,12,123,0.4)
          url("/img/cat-space.gif")
          left top
          no-repeat
        `
      });
}

function ModalWarning(){
    Swal.fire({
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/img/cat-space.gif)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/img/nyan-cat.gif")
          left top
          no-repeat
        `
      });
}

function ModalHtml(){
    Swal.fire({
        title: "Adicionado ao Carrinho",
        text: "That thing is still around?",
        icon: "success",
        
        html:`
        <img src="/img/cat-space.gif" >
        `
        
      });
}

function Carrinho(){
    Swal.fire({
        title: "Deseja Finalizar Pedido?",
        showDenyButton: true,

        confirmButtonText: "Confirmar",
        denyButtonText: `Voltar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Corfirmado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Item nâo confirmado", "", "info");
        }
      });

}

function AddCart(){
    Swal.fire("Item Adicionado ao Carriho");
}