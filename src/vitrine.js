fetch("../backend/produtos.json")
  .then((response) => response.json())
  .then((dados) => {
    const listaDeProdutos = dados.products;

    const containers = document.querySelectorAll(".vitrine-container");
    containers.forEach((container) => {
      container.innerHTML = "";

      listaDeProdutos.forEach((produto) => {
        const valorAntigo = produto.price * 1.2;

        const precoNovoFormatado = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(produto.price);

        const precoAntigoFormatado = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valorAntigo);

        const parcela = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(produto.price / 2);

        container.innerHTML += `
                <div class="vitrine-container-item swiper-slide">
                    <img src="${produto.photo}" alt="${produto.productName}" style="width=100%; max-width: 200px;">
                    <h3 class="vitrine-titulo-item">${produto.productName}</h3>
                    <p class="vitrine-preco-antigo">${precoAntigoFormatado}</p> 
                    <p class="vitrine-preco-novo">${precoNovoFormatado}</p>
                    <p class="vitrine-preco-parcelado">ou 2x de ${parcela}</p>
                    <p class="vitrine-frete">Frete grátis</p>
                    <button class="vitrine-btn">COMPRAR</button>
                </div>
            `;
      });

      const swiperElement = container.closest(".mySwiper");

      new Swiper(swiperElement, {
        slidesPerView: 4,
        spaceBetween: 18,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        },
      });
    });
  })
  .catch((erro) => console.error("Erro:", erro));
