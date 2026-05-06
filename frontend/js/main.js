console.log("Frontend CinelogPlay iniciado");

// ========================================
// DADOS DO USUÁRIO
// ========================================

const currentUser = {
  name: "Lucas Dias",
  email: "lucas@email.com",
  avatar: "L",
};

// ========================================
// INICIALIZAR
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  updateUserProfile();
  loadFilmes();
  setupMenuToggle();
  setupUserDropdown();
  setupNavigation();
});

// ========================================
// MENU HAMBÚRGUER
// ========================================

function setupMenuToggle() {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  // Abrir/Fechar menu
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("active");
    sidebarOverlay.classList.toggle("active");
  });

  // Fechar menu ao clicar fora
  sidebarOverlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    sidebarOverlay.classList.remove("active");
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".sidebar-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
      sidebarOverlay.classList.remove("active");
    });
  });

  // Fechar menu ao clicar fora dele
  document.addEventListener("click", (e) => {
    if (
      !sidebar.contains(e.target) &&
      !menuToggle.contains(e.target) &&
      sidebar.classList.contains("active")
    ) {
      sidebar.classList.remove("active");
      sidebarOverlay.classList.remove("active");
    }
  });
}

// ========================================
// DROPDOWN DO PERFIL
// ========================================

function setupUserDropdown() {
  const userProfileBtn = document.getElementById("userProfileBtn");
  const userDropdown = document.getElementById("userDropdown");
  const profileLink = document.getElementById("profileLink");
  const logoutLink = document.getElementById("logoutLink");

  // Abrir/Fechar dropdown
  userProfileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    userDropdown.classList.toggle("active");
  });

  // Fechar ao clicar fora
  document.addEventListener("click", (e) => {
    if (
      !userProfileBtn.contains(e.target) &&
      !userDropdown.contains(e.target)
    ) {
      userDropdown.classList.remove("active");
    }
  });

  // Perfil
  profileLink.addEventListener("click", (e) => {
    e.preventDefault();
    userDropdown.classList.remove("active");
    alert(`Perfil de ${currentUser.name}`);
  });

  // Sair
  logoutLink.addEventListener("click", (e) => {
    e.preventDefault();
    userDropdown.classList.remove("active");
    alert("Saindo da conta...");
  });
}

// ========================================
// ATUALIZAR PERFIL
// ========================================

function updateUserProfile() {
  document.getElementById("userName").textContent = currentUser.name;
  document.getElementById("userEmail").textContent = currentUser.email;
  document.getElementById("userAvatar").textContent = currentUser.avatar;
}

// ========================================
// CARREGAR FILMES
// ========================================

function loadFilmes() {
  fetch("/api/filmes")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("filmes-container");
      if (!container) return;
      container.innerHTML = "";

      if (!data || data.length === 0) {
        container.innerHTML =
          '<p style="color: #999; grid-column: 1 / -1; text-align: center;">Nenhum filme encontrado</p>';
        return;
      }

      data.forEach((filme) => {
        const div = document.createElement("div");
        div.className = "filme-card";
        div.innerHTML = `
          <h2>${filme.titulo || "Filme sem título"}</h2>
          <p><strong>Gênero:</strong> ${filme.genero || "N/A"}</p>
          <p><strong>Ano:</strong> ${filme.ano || "N/A"}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch((err) => {
      console.error("Erro ao carregar filmes:", err);
      const container = document.getElementById("filmes-container");
      if (container) {
        container.innerHTML =
          '<p style="color: #999; grid-column: 1 / -1; text-align: center;">Erro ao carregar filmes</p>';
      }
    });
}

// ========================================
// NAVEGAÇÃO ENTRE PÁGINAS
// ========================================

function setupNavigation() {
  document.querySelectorAll(".sidebar-nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = e.currentTarget.getAttribute("data-page");

      // Remover active de todos
      document.querySelectorAll(".sidebar-nav a").forEach((a) => {
        a.classList.remove("active");
      });

      // Adicionar active ao clicado
      e.currentTarget.classList.add("active");

      // Carregar página correspondente
      loadPage(page);
    });
  });
}

function loadPage(page) {
  const app = document.getElementById("app");

  const pages = {
    home: `
      <div class="container-fluid d-flex align-items-center justify-content-center" style="min-height: calc(100vh - 80px);">
        <div class="text-center" style="background: white; padding: 3rem 2rem; border-radius: 8px; max-width: 700px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
          <h1 style="font-size: 2rem; color: #333; font-weight: 400; letter-spacing: 0.5px; margin-bottom: 1.5rem; line-height: 1.3;">O melhor do cinema você encontra aqui!</h1>
          <p style="font-size: 1rem; color: #999; margin-bottom: 0.75rem; font-weight: 500;">Catálogo Informativo de Produções Cinematográficas</p>
          <p style="font-size: 0.95rem; color: #aaa;">Bem-vindo ao seu diário de bordo do cinema!</p>
        </div>
      </div>
    `,
    filmes: `
      <div class="container">
        <div class="row align-items-center justify-content-center mb-5">
          <div class="col-12 text-center">
            <h1 style="font-size: 2rem; color: #333; font-weight: 400;">Catálogo de Filmes</h1>
            <p style="font-size: 1rem; color: #999;">Conheça todos os nossos filmes</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div id="filmes-container" class="filmes-grid"></div>
          </div>
        </div>
      </div>
    `,
    diretores: `
      <div class="container">
        <div class="row align-items-center justify-content-center mb-5">
          <div class="col-12 text-center">
            <h1 style="font-size: 2rem; color: #333; font-weight: 400;">Nossos Diretores</h1>
            <p style="font-size: 1rem; color: #999;">Conheça os grandes nomes do cinema</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div id="diretores-container" class="filmes-grid">
              <p style="color: #999; grid-column: 1 / -1; text-align: center;">Carregando diretores...</p>
            </div>
          </div>
        </div>
      </div>
    `,
    contato: `
      <div class="container">
        <div class="row align-items-center justify-content-center mb-5">
          <div class="col-12 text-center">
            <h1 style="font-size: 2rem; color: #333; font-weight: 400;">Entre em Contato</h1>
            <p style="font-size: 1rem; color: #999;">Envie sua mensagem para nós</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-md-6">
            <form class="contact-form" id="contato-form" onsubmit="handleContactSubmit(event)">
              <input
                type="email"
                placeholder="Seu email"
                required
              />
              <textarea
                placeholder="Sua mensagem"
                required
                rows="5"
              ></textarea>
              <button type="submit">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    `,
  };

  app.innerHTML = pages[page] || pages.home;

  // Recarregar filmes se necessário
  if (page === "home" || page === "filmes") {
    setTimeout(() => {
      const container = document.getElementById("filmes-container");
      if (container) {
        container.innerHTML = "";
        loadFilmes();
      }
    }, 100);
  }
}

// ========================================
// ENVIAR CONTATO
// ========================================

function handleContactSubmit(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso!");
  event.target.reset();
}
