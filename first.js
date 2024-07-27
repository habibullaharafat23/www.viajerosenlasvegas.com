//linking to google font

var link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
document.getElementsByTagName("head")[0].appendChild(link);

//linking to css file

var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href ="https://cdn.jsdelivr.net/gh/habibullaharafat23/www.viajerosenlasvegas.com@6b533d90aa87af8c7d69fd2de77c4d34e57dcc73/style.css";
//  link.href = "style.css";
document.getElementsByTagName("head")[0].appendChild(link);

//html elements

var consentdiv = document.createElement("div");

consentdiv.innerHTML = `
<div class=consent-banner-wrapper>
  <div class=consent-content-area>
    <div class="navigation-header">
      <div class="nav-item active-nav consent">
        <h3 class="consent-headlines">Consentimiento</h3>
      </div>
      <div class="nav-item details">
        <h3 class="consent-headlines">Detalles</h3>
      </div>
      <div class="nav-item about">
        <h3 class="consent-headlines">Acerca </h3>
      </div>
    </div>
    


    <div class="section-container">
      <div class="section-content active-section-content" id="consentSection">
        <p class="consent-descriptions">Utilizamos cookies para personalizar el contenido y los anuncios, para ofrecer funciones de redes sociales y para analizar nuestro tráfico. También compartimos información sobre su uso de nuestro sitio con nuestros socios de redes sociales, publicidad y análisis, quienes pueden combinarla con otra información que usted les haya proporcionado o que hayan recopilado del uso que usted haga de sus servicios.</p>
      </div>
      <div class="section-content" style="display:none" id="detailsSection">
        <div class="cookie-detail-wrapper necessaryCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Necesario</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalNecessaryCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked class="inputDisable" disabled>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Las cookies necesarias ayudan a que un sitio web sea utilizable al habilitar funciones básicas como la navegación por las páginas y el acceso a áreas seguras del sitio web. El sitio web no puede funcionar correctamente sin estas cookies.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper preferencesCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Preferencias</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalPreferencesCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Las cookies de preferencias permiten a un sitio web recordar información que cambia la forma en que el sitio web se comporta o se ve, como su idioma preferido o la región en la que se encuentra.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper analyticsCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Analytics</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalAnalyticsCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Las cookies estadísticas ayudan a los propietarios de sitios web a entender cómo los visitantes interactúan con los sitios web al recopilar y reportar información de manera anónima.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper marketingCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Marketing</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalMarketingCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Las cookies de marketing se utilizan para rastrear a los visitantes a través de los sitios web. La intención es mostrar anuncios que sean relevantes y atractivos para el usuario individual y, de esta manera, más valiosos para los editores y anunciantes de terceros.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
      </div>
      <div class="section-content" style="display:none" id="aboutSection">
        <p class="consent-descriptions">
          <span class="sec3Content" style="margin-top:15px">Las cookies son pequeños archivos de texto que los sitios web pueden usar para hacer que la experiencia del usuario sea más eficiente.</span>
          <span class="sec3Content">La ley establece que podemos almacenar cookies en su dispositivo si son estrictamente necesarias para el funcionamiento de este sitio. Para todos los demás tipos de cookies necesitamos su permiso. Esto significa que las cookies que se categorizan como necesarias se procesan de acuerdo con el Art. 6 (1) (f) del GDPR. Todas las demás cookies, es decir, las de las categorías de preferencias y marketing, se procesan de acuerdo con el Art. 6 (1) (a) del GDPR.</span>

          <span class="sec3Content">Este sitio utiliza diferentes tipos de cookies. Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras páginas.</span>
          
        </p>
      </div>
    </div>
    


  </div>

  <div class=consent-action-footer>
    <div class=action-buttons id=consentActionButtons>
      <button action="accept" class="action-btn active" id=acceptConsentButton>Aceptar</button>
      <button action="reject" class="action-btn" id="rejectConsentButton" style="display:none">REJECT</button>
      <button action="preference" class="action-btn" id="preferenceConsentButton">PREFERENCIA</button>
    </div>
  </div>

</div>

<div class=miniConsentBanner>
  <img alt="" src=https://cdn.jsdelivr.net/gh/alifmahmudashik/marketing@marketing/consent-banner/img/cookie-icon.svg width=100%>
</div>
`;

document.body.appendChild(consentdiv);
