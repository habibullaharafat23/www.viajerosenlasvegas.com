
 
    //default state
  
  var mainConsentBanner = document.querySelector(".consent-banner-wrapper");
  var miniConsentBanner = document.querySelector(".miniConsentBanner");
  
  function consentBanner(showMain, showMini){
    mainConsentBanner.style.display = showMain ? "block" : "none";
    miniConsentBanner.style.display = showMini ? "block" : "none";
  }
  
  
  //get cookie info and toggle info and update it
  var checkUserType = localStorage.getItem("mrCookieState");
  var getAllToggle = document.querySelector(".cookie-detail-headline .cookie-toggle input");
  var cookieCatagoryName = document.querySelector(".cookie-detail-headline .cookieCatagory").textContent;
  
  // open mainBanner
  miniConsentBanner.onclick = ()=>{
  
    consentBanner(true, false)
  
    var inputState = JSON.parse(localStorage.getItem("inputState")) || {};
    var cookieToggle = document.querySelectorAll(".cookie-toggle input");
  
  if (inputState) {
    if (inputState.analytics === true) {
      cookieToggle[2].checked = true;
    }
    if (inputState.marketing === true) {
      cookieToggle[3].checked = true;
    }
    if (inputState.preferences === true) {
      cookieToggle[1].checked = true;
    }
    if (inputState.necessary === true) {
      cookieToggle[0].checked = true;
    }
  }
  
  }
  
  //default cookie state
  var defaultState = {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
    functionality_storage: "granted",
    personalization_storage: "granted",
    security_storage: "granted"
  }
  //check first visit and update the banner and consent
  function fistVisitConsent(){
    if(checkUserType == "true"){
  
    var userConsent = JSON.parse(localStorage.getItem("cookieState"))
    
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
    
      gtag('consent', 'default', defaultState);
      
      consentBanner(false, true)
    
      var inputState = JSON.parse(localStorage.getItem("inputState")) || {};
    
      if(inputState.marketing == true){
        userConsent.ad_storage = "granted",
        userConsent.ad_personalization = "granted",
        userConsent.ad_user_data = "granted"
      }else if(inputState.analytics == true){
        userConsent.analytics_storage = "granted"
      }else if(inputState.preferences == true){
        userConsent.functionality_storage = "granted",
        userConsent.personalization_storage = "granted"
        
      }
  
      gtag('consent', 'update', userConsent);
  
      window.dataLayer.push({
        event: "consent_page_view",
        consent: userConsent,
      })
  
    }else if(!checkUserType || checkUserType === null){
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', defaultState);
      consentBanner(true, false)
    }
    
  }
  fistVisitConsent();
  
  
  
  //accept all
  
  var acceptConsentButton = document.getElementById("acceptConsentButton");
  acceptConsentButton.onclick = ()=>{
    var acceptAll = {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
      functionality_storage: "granted",
      personalization_storage: "granted",
      security_storage: "granted"
  };
  
    var inputArray = {
        necessary: true,
        preferences: true,
        analytics: true,
        marketing: true,
    }
  
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    
    gtag('consent', 'update', acceptAll);
    window.dataLayer.push({
      event: "consent_update",
      consent: acceptAll,
    })
  
    consentBanner(false, true)
  
    localStorage.setItem("mrCookieState", true);
    
    localStorage.setItem("cookieState", JSON.stringify(acceptAll));
    localStorage.setItem("inputState", JSON.stringify(inputArray));
  
    var cookieToggle = document.querySelectorAll(".cookie-toggle input");
    for(let i = 1; i < cookieToggle.length; i++){
      cookieToggle[i].checked = true
    }
  
  }
  
  
  
  
  
  //rejects all
  var rejectConsentButton = document.getElementById("rejectConsentButton");
  rejectConsentButton.onclick = ()=>{
  
    var deniedAll = {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
      functionality_storage: "denied",
      personalization_storage: "denied",
      security_storage: "granted"
  }
  
    var inputArray = {
        necessary: false,
        preferences: false,
        analytics: false,
        marketing: false,
    }
  
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    
    gtag('consent', 'update', deniedAll);
    window.dataLayer.push({
      event: "consent_update",
      consent: deniedAll,
    })
  
    consentBanner(false, true);
  
    localStorage.setItem("mrCookieState", true);
    localStorage.setItem("cookieState", JSON.stringify(deniedAll));
    localStorage.setItem("inputState", JSON.stringify(inputArray));
  
    var cookieToggle = document.querySelectorAll(".cookie-toggle input");
    for(let i = 1; i < cookieToggle.length; i++){
      cookieToggle[i].checked = false
    }
  }
  
  
  var preferenceConsentButton = document.getElementById("preferenceConsentButton");
  preferenceConsentButton.onclick = ()=>{
    
    var navItems = document.querySelectorAll(".nav-item");
  
    var detailsSec = document.getElementById("detailsSection");
    var allSections = document.querySelectorAll(".section-content");
    var prefBtn = document.getElementById("preferenceConsentButton");
  
    if(detailsSec.style.display == "none"){
      allSections.forEach((element, index) => {
        navItems[index].style.borderBottom = 'none';
        element.style.display = 'none';
  
      navItems[1].style.borderBottom = '2px solid #3771ce';  
      allSections[1].style.display = "block";
      prefBtn.innerText = "Save"
    });
  
    }else if(detailsSec.style.display == "block"){
      var consetCustom = {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
        functionality_storage: "denied",
        personalization_storage: "denied",
        security_storage: "granted"
    };
    
      var inputArray = {
          necessary: true,
          preferences: false,
          analytics: false,
          marketing: false,
      }
    
      var inputkeys = Object.keys(inputArray);
      var consetCustomKeys = Object.keys(consetCustom);
      
      var cookieToggle = document.querySelectorAll(".cookie-toggle input");
      for(let i = 0; i < cookieToggle.length; i++){
          inputArray[inputkeys[i]] = cookieToggle[i].checked
      }
    
      if(inputArray.marketing == true){
        consetCustom.ad_storage = "granted",
        consetCustom.ad_personalization = "granted",
        consetCustom.ad_user_data = "granted"
      }else if(inputArray.analytics == true){
        consetCustom.analytics_storage = "granted"
      }else if(inputArray.preferences == true){
        consetCustom.functionality_storage = "granted",
        consetCustom.personalization_storage = "granted"
      }
    
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      
      gtag('consent', 'update', consetCustom);
      window.dataLayer.push({
        event: "consent_update",
        consent: consetCustom,
      })
      consentBanner(false, true);
    
      localStorage.setItem("mrCookieState", true);
      localStorage.setItem("cookieState", JSON.stringify(consetCustom));
      localStorage.setItem("inputState", JSON.stringify(inputArray));
    }
  }
  
  
  
  var matchedCookies = [
    {
      "id": "fbp",
      "platform": "Facebook",
      "category": "Marketing",
      "data_key": "_fbp",
      "domain": "https://carplaydiy.com/",
      "description": "Používáno Facebookem k doručování řady reklamních produktů, jako je real-time bidding od třetích stran",
      "retention_period": "3 months",
      "data_controller": "Facebook",
      "privary_rights_portals": "https://www.facebook.com/about/privacy/",
      "wildcard_match": 0
  },
  {
      "id": "fbc",
      "platform": "Facebook",
      "category": "Marketing",
      "data_key": "_fbc",
      "domain": "https://carplaydiy.com/",
      "description": "Používáno Facebookem k doručování řady reklamních produktů, jako je real-time bidding od třetích stran",
      "retention_period": "3 months",
      "data_controller": "Facebook",
      "privary_rights_portals": "https://www.facebook.com/about/privacy/",
      "wildcard_match": 0
  },
  {
      "id": "ga",
      "platform": "Google",
      "category": "Analytics",
      "data_key": "_ga *",
      "domain": "https://carplaydiy.com/",
      "description": "Primární cookie používaná Google Analytics k rozlišení jednoho návštěvníka od druhého",
      "retention_period": "1 month",
      "data_controller": "Google",
      "privary_rights_portals": "https://policies.google.com/privacy?hl=en-US",
      "wildcard_match": 0
  },
  {
      "id": "gcl-au",
      "platform": "Google",
      "category": "Marketing",
      "data_key": "_gcl_au",
      "domain": "https://carplaydiy.com/",
      "description": "Pro uložení a sledování konverzí.",
      "retention_period": "3 months",
      "data_controller": "Google",
      "privary_rights_portals": "https://policies.google.com/privacy?hl=en-US",
      "wildcard_match": 0
  },
  {
      "id": "ga",
      "platform": "Google",
      "category": "Analytics",
      "data_key": "_ga_*",
      "domain": "https://carplaydiy.com/",
      "description": "Pro uložení a počítání zobrazení stránek.",
      "retention_period": "1 year",
      "data_controller": "Google",
      "privary_rights_portals": "https://policies.google.com/privacy",
      "wildcard_match": 0
  },
  {
    "id": "ga",
    "platform": "Google",
    "category": "Analytics",
    "data_key": "_gid*",
    "domain": "https://carplaydiy.com/",
    "description": "Ukládat a počítat zobrazení stránek.",
    "retention_period": "1 day",
    "data_controller": "Google",
    "privary_rights_portals": "https://policies.google.com/privacy",
    "wildcard_match": 0
},
    {
        "id": "wordpress-logged-in",
        "platform": "WordPress",
        "category": "Functional",
        "data_key": "wordpress_logged_in_*",
        "domain": "https://carplaydiy.com/",
        "description": "Ukládat přihlášené uživatele.",
        "retention_period": "1 months",
        "data_controller": "WordPress",
        "privary_rights_portals": "https://wordpress.org/about/privacy/",
        "wildcard_match": 0
    },
    {
        "id": "wordpress-sec",
        "platform": "WordPress",
        "category": "Functional",
        "data_key": "wordpress_sec_*",
        "domain": "https://carplaydiy.com/",
        "description":"Pro zajištění ochrany proti hackerům uchovávejte údaje o účtu.",
        "retention_period": "15 days",
        "data_controller": "WordPress",
        "privary_rights_portals": "https://wordpress.org/about/privacy/",
        "wildcard_match": 0
    },
    {
        "id": "wordpress-test-cookie",
        "platform": "WordPress",
        "category": "Functional",
        "data_key": "wordpress_test_cookie",
        "domain": "https://carplaydiy.com/",
        "description": "Poskytnout ochranu proti hackerům, uložit údaje účtu.",
        "retention_period": "Session",
        "data_controller": "WordPress",
        "privary_rights_portals": "https://wordpress.org/about/privacy/",
        "wildcard_match": 0
    },
    {
        "id": "wp-settings",
        "platform": "WordPress",
        "category": "Functional",
        "data_key": "wp-settings-*",
        "domain": "https://carplaydiy.com/",
        "description": "ukládat uživatelské preference.",
        "retention_period": "Persistent",
        "data_controller": "WordPress",
        "privary_rights_portals": "https://wordpress.org/about/privacy/",
        "wildcard_match": 0
    },
    {
        "id": "wp-settings",
        "platform": "WordPress",
        "category": "Functional",
        "data_key": "wp-settings-*",
        "domain": "https://carplaydiy.com/",
        "description": "ukládat uživatelské preference.",
        "retention_period": "1 year",
        "data_controller": "WordPress",
        "privary_rights_portals": "https://wordpress.org/about/privacy/",
        "wildcard_match": 0
    },
    {
      "id": "MUID",
      "platform": "Microsoft Clarity",
      "category": "Marketing",
      "data_key": "MUID",
      "domain": "https://carplaydiy.com/",
      "description": "Ukládejte a sledujte návštěvy různých webových stránek.",
      "retention_period": "1 year",
      "data_controller": "Microsoft Clarity",
      "privary_rights_portals": "https://privacy.microsoft.com/en-us/privacystatement",
      "wildcard_match": 0
  },
  {
    "id": "clck",
    "platform": "Microsoft Clarity",
    "category": "Marketing",
    "data_key": "_clck",
    "domain": "https://carplaydiy.com/",
    "description": "Uložit jedinečné ID uživatele.",
    "retention_period": "1 year",
    "data_controller": "Microsoft Clarity",
    "privary_rights_portals": "https://privacy.microsoft.com/en-us/privacystatement",
    "wildcard_match": 0
},
{
  "id": "clsk",
  "platform": "Microsoft Clarity",
  "category": "Statistics",
  "data_key": "_clsk",
  "domain": "https://carplaydiy.com/",
  "description": "Ukládat a kombinovat zobrazení stránek uživatelem do jednoho záznamu relace.",
  "retention_period": "1 day",
  "data_controller": "Microsoft Clarity",
  "privary_rights_portals": "https://privacy.microsoft.com/en-us/privacystatement",
  "wildcard_match": 0
},
{
  "id": "pin_unauth",
  "platform": "Pinterest",
  "category": "Marketing",
  "data_key": "_pin_unauth",
  "domain": "https://carplaydiy.com/",
  "description": "Ukládat historii používání uživatelů.",
  "retention_period": "1 day",
  "data_controller": "Pinterest",
  "privary_rights_portals": "https://policy.pinterest.com/en/privacy-policy",
  "wildcard_match": 0
},
{
  "id": "pin_unauth",
  "platform": "Pinterest",
  "category": "Marketing",
  "data_key": "_pin_unauth",
  "domain": "https://carplaydiy.com/",
  "description":"Ukládat historii používání uživatelů.",
  "retention_period": "1 day",
  "data_controller": "Pinterest",
  "privary_rights_portals": "https://policy.pinterest.com/en/privacy-policy",
  "wildcard_match": 0
},
{
  "id": "uetsid",
  "platform": "Bing Ads",
  "category": "Marketing",
  "data_key": "__uetsid",
  "domain": "https://carplaydiy.com/",
  "description": "ukládat a sledovat návštěvy napříč webovými stránkami.",
  "retention_period": "1 day",
  "data_controller": "Bing Ads",
  "privary_rights_portals": "https://privacy.microsoft.com/privacystatement",
  "wildcard_match": 0
},
{
  "id": "uetvid",
  "platform": "Bing Ads",
  "category": "Marketing",
  "data_key": "_uetvid",
  "domain": "https://carplaydiy.com/",
  "description": "ukládat a sledovat návštěvy napříč webovými stránkami.",
  "retention_period": "13 month",
  "data_controller": "Bing Ads",
  "privary_rights_portals": "https://privacy.microsoft.com/privacystatement",
  "wildcard_match": 0
},
{
  "id": "Sbjs_current",
  "platform": "Sourcebuster JS",
  "category": "Analytics",
  "data_key": "Sbjs_current",
  "domain": "https://carplaydiy.com/",
  "description": "ukládat podrobnosti o prohlížeči.",
  "retention_period": "6 month",
  "data_controller": "Sourcebuster JS",
  "privary_rights_portals": "#",
  "wildcard_match": 0
},
{
  "id": "sbjs_current_add",
  "platform": "Sourcebuster JS",
  "category": "Analytics",
  "data_key": "sbjs_current_add",
  "domain": "https://carplaydiy.com/",
  "description": "ukládat podrobnosti o prohlížeči.",
  "retention_period": "6 month",
  "data_controller": "Sourcebuster JS",
  "privary_rights_portals": "#",
  "wildcard_match": 0
},
{
  "id": "sbjs_first",
  "platform": "Sourcebuster JS",
  "category": "Analytics",
  "data_key": "sbjs_first",
  "domain": "https://carplaydiy.com/",
  "description": "Používá se knihovnou Simple Behavioral JavaScript (SBJS) k ukládání dalších dat souvisejících s chováním nebo interakcemi aktuálního uživatele na webu.",
  "retention_period": "6 month",
  "data_controller": "Sourcebuster JS",
  "privary_rights_portals": "#",
  "wildcard_match": 0
},
{
  "id": "Sbjs_first_add",
  "platform": "Sourcebuster JS",
  "category": "Analytics",
  "data_key": "Sbjs_first_add",
  "domain": "https://carplaydiy.com/",
  "description": "Používá se knihovnou Simple Behavioral JavaScript (SBJS) k ukládání dalších dat souvisejících s chováním nebo interakcemi aktuálního uživatele na webu.",
  "retention_period": "6 month",
  "data_controller": "Sourcebuster JS",
  "privary_rights_portals": "#",
  "wildcard_match": 0
},
{
  "id": "sbjs_migrations",
  "platform": "Sourcebuster JS",
  "category": "Analytics",
  "data_key": "sbjs_migrations",
  "domain": "https://carplaydiy.com/",
  "description": "Používá se knihovnou Simple Behavioral JavaScript (SBJS) k ukládání dalších dat souvisejících s chováním nebo interakcemi aktuálního uživatele na webu.",
  "data_controller": "Sourcebuster JS",
  "privary_rights_portals": "#",
  "wildcard_match": 0
},
{
  "id": "sbjs_udata",
  "platform": "Sourcebuster JS",
  "category": "Analytics",
  "data_key": "sbjs_udata",
  "domain": "https://carplaydiy.com/",
  "description":"Používá se knihovnou Simple Behavioral JavaScript (SBJS) k ukládání dalších dat souvisejících s chováním nebo interakcemi aktuálního uživatele na webu.",
  "retention_period": "6 month",
  "data_controller": "Sourcebuster JS",
  "privary_rights_portals": "#",
  "wildcard_match": 0
},
{
  "id": "tk_ai",
  "platform": "WooCommerce",
  "category": "Analytics",
  "data_key": "tk_ai",
  "domain": "https://carplaydiy.com/",
  "description": "pro uložení jedinečného ID uživatele.",
  "retention_period": "session",
  "data_controller": "WooCommerce",
  "privary_rights_portals": "#",
  "wildcard_match": 0
},
{
  "id": "tk_r3d",
  "platform": "Jetpack",
  "category": "Analytics",
  "data_key": "tk_r3d",
  "domain": "https://carplaydiy.com/",
  "description": "pro uložení jedinečného ID uživatele.",
  "retention_period": "3 days",
  "data_controller": "Jetpack",
  "privary_rights_portals": "https://jetpack.com/support/privacy/#",
  "wildcard_match": 0
},
{
  "id": "ANONCHK",
  "platform": "Microsoft Clarity",
  "category": "Marketing",
  "data_key": "ANONCHK",
  "domain": "https://carplaydiy.com/",
  "description": "se specifickými funkcemi",
  "retention_period": "session",
  "data_controller": "Microsoft Clarity",
  "privary_rights_portals": "https://privacy.microsoft.com/en-us/privacystatement",
  "wildcard_match": 0
},
{
  "id": "APISID",
  "platform": "Google",
  "category": "Marketing",
  "data_key": "APISID",
  "domain": "https://carplaydiy.com/",
  "description": "se specifickými funkcemi",
  "retention_period": "1 year",
  "data_controller": "Google",
  "privary_rights_portals": "https://policies.google.com/privacy",
  "wildcard_match": 0
},
{
  "id": "DSID",
  "platform": "Google",
  "category": "Marketing",
  "data_key": "DSID",
  "domain": "https://carplaydiy.com/",
  "description": "pro uložení uživatelských preferencí.",
  "retention_period": "2 weeks",
  "data_controller": "Google",
  "privary_rights_portals": "https://policies.google.com/privacy",
  "wildcard_match": 0
},
{
  "id": "HSID",
  "platform": "Google",
  "category": "Marketing",
  "data_key": "HSID",
  "domain": "https://carplaydiy.com/",
  "description": "poskytnout prevenci podvodů.",
  "retention_period": "2 years",
  "data_controller": "Google",
  "privary_rights_portals": "https://policies.google.com/privacy",
  "wildcard_match": 0
},
{
  "id": "SAPISID",
  "platform": "Google",
  "category": "Marketing",
  "data_key": "SAPISID",
  "domain": "https://carplaydiy.com/",
  "description": "pro uložení uživatelských preferencí.",
  "retention_period": "2 years",
  "data_controller": "Google",
  "privary_rights_portals": "https://policies.google.com/privacy",
  "wildcard_match": 0
},
{
  "id": "SIDCC",
  "platform": "Google",
  "category": "Marketing",
  "data_key": "SIDCC",
  "domain": "https://carplaydiy.com/",
  "description": "poskytnout identifikaci důvěryhodného webového provozu.",
  "retention_period": "1 years",
  "data_controller": "Google",
  "privary_rights_portals": "https://policies.google.com/privacy",
  "wildcard_match": 0
},
{
  "id": "SSID",
  "platform": "Google",
  "category": "Marketing",
  "data_key": "SSID",
  "domain": "https://carplaydiy.com/",
  "description": "se specifickými funkcemi",
  "retention_period": "2 years",
  "data_controller": "Google",
  "privary_rights_portals": "https://policies.google.com/privacy",
  "wildcard_match": 0
},
{
  "id": "stripe_mid",
  "platform": "Stripe",
  "category": "Marketing",
  "data_key": "__stripe_mid",
  "domain": "https://carplaydiy.com/",
  "description": "poskytnout prevenci podvodů.",
  "retention_period": "1 years",
  "data_controller": "Stripe",
  "privary_rights_portals": "https://stripe.com/privacy",
  "wildcard_match": 0
},
{
  "id": "hjSessionUser",
  "platform": "Hotjar",
  "category": "Analytics",
  "data_key": "_hjSessionUser_*",
  "domain": "https://carplaydiy.com/",
  "description": "pro uložení jedinečného ID uživatele.",
  "retention_period": "1 years",
  "data_controller": "Hotjar",
  "privary_rights_portals": "https://www.hotjar.com/legal/policies/privacy/y",
  "wildcard_match": 0
},
{
  "id": "datr",
  "platform": "Facebook",
  "category": "Marketing",
  "data_key": "datr",
  "domain": "https://carplaydiy.com/",
  "description": "poskytnout prevenci podvodů.",
  "retention_period": "2 years",
  "data_controller": "Facebook",
  "privary_rights_portals": "https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0",
  "wildcard_match": 0
},
{
  "id": "sb",
  "platform": "Facebook",
  "category": "Marketing",
  "data_key": "sb",
  "domain": "https://carplaydiy.com/",
  "description": "ukládat podrobnosti o prohlížeči.",
  "retention_period": "2 years",
  "data_controller": "Facebook",
  "privary_rights_portals": "https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0",
  "wildcard_match": 0
},
{
  "id": "ttwid",
  "platform": "TikTok",
  "category": "Marketing",
  "data_key": "ttwid",
  "domain": "https://carplaydiy.com/",
  "description": "uložit, pokud uživatel viděl vložený obsah.",
  "retention_period": "1 years",
  "data_controller": "TikTok",
  "privary_rights_portals": "https://www.tiktok.com/legal/page/row/privacy-policy/en",
  "wildcard_match": 0
},
{
  "id": "wd",
  "platform": "Facebook",
  "category": "Marketing",
  "data_key": "wd",
  "domain": "https://carplaydiy.com/",
  "description": "číst rozlišení obrazovky.",
  "retention_period": "1 week",
  "data_controller": "Facebook",
  "privary_rights_portals": "https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0",
  "wildcard_match": 0
},
{
  "id": "xs",
  "platform": "Facebook",
  "category": "Marketing",
  "data_key": "xs",
  "domain": "https://carplaydiy.com/",
  "description": "číst rozlišení obrazovky.",
  "retention_period": "3 months",
  "data_controller": "Facebook",
  "privary_rights_portals": "https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0",
  "wildcard_match": 0
},
   ];
  
  //cookie catagories
  var necessaryCookies = {};
  var preferencesCookies = {};
  var analyticsCookies = {};
  var marketingCookies = {};
  
  //select each catagory elements
  var getNecessarySection = document.querySelector(".necessaryCookies .all-cookies");
  var getPreferencesSection = document.querySelector(".preferencesCookies .all-cookies");
  var getAnalyticsSection = document.querySelector(".analyticsCookies .all-cookies");
  var getMarketingSection = document.querySelector(".marketingCookies .all-cookies");
  
  //create code for each catagory
  var necessaryElements = [];
  var preferencesElements = [];
  var analyticsElements = [];
  var marketingElements = [];
  
  
  //find the matching cookies with the data base and website
  function matchingCookies() {
  
    matchedCookies.forEach((element, index)=>{
      function checkCookies(){
          var platform = matchedCookies[index].platform;
              if(!allCookies[platform]){
                  allCookies[platform] = []
              };
  
              allCookies[platform].push({
                  id: matchedCookies[index].id,
                  platform: matchedCookies[index].platform,
                  category: matchedCookies[index].category,
                  data_key: matchedCookies[index].data_key,
                  domain: matchedCookies[index].domain,
                  description: matchedCookies[index].description,
                  retention_period: matchedCookies[index].retention_period,
                  data_controller: matchedCookies[index].data_controller,
                  privary_rights_portals: matchedCookies[index].privary_rights_portals,
                  wildcard_match: matchedCookies[index].wildcard_match,
           });
      }
  
      if(element.category == "Functional"){
          var platform = matchedCookies[index].platform;
          if(!necessaryCookies[platform]){
            necessaryCookies[platform] = []
          };
          necessaryCookies[platform].push({
              id: matchedCookies[index].id,
              platform: matchedCookies[index].platform,
              category: matchedCookies[index].category,
              data_key: matchedCookies[index].data_key,
              domain: matchedCookies[index].domain,
              description: matchedCookies[index].description,
              retention_period: matchedCookies[index].retention_period,
              data_controller: matchedCookies[index].data_controller,
              privary_rights_portals: matchedCookies[index].privary_rights_portals,
              wildcard_match: matchedCookies[index].wildcard_match,
          });
          
      }else if(element.category == "Preferences"){
          var platform = matchedCookies[index].platform;
          if(!preferencesCookies[platform]){
              preferencesCookies[platform] = []
          };
          preferencesCookies[platform].push({
              id: matchedCookies[index].id,
              platform: matchedCookies[index].platform,
              category: matchedCookies[index].category,
              data_key: matchedCookies[index].data_key,
              domain: matchedCookies[index].domain,
              description: matchedCookies[index].description,
              retention_period: matchedCookies[index].retention_period,
              data_controller: matchedCookies[index].data_controller,
              privary_rights_portals: matchedCookies[index].privary_rights_portals,
              wildcard_match: matchedCookies[index].wildcard_match,
          });
        }
        else if(element.category == "Analytics"){
            var platform = matchedCookies[index].platform;
            if(!analyticsCookies[platform]){
                analyticsCookies[platform] = []
            };
            analyticsCookies[platform].push({
                id: matchedCookies[index].id,
                platform: matchedCookies[index].platform,
                category: matchedCookies[index].category,
                data_key: matchedCookies[index].data_key,
                domain: matchedCookies[index].domain,
                description: matchedCookies[index].description,
                retention_period: matchedCookies[index].retention_period,
                data_controller: matchedCookies[index].data_controller,
                privary_rights_portals: matchedCookies[index].privary_rights_portals,
                wildcard_match: matchedCookies[index].wildcard_match,
            });
        }
        
        else if(element.category == "Marketing"){
          var platform = matchedCookies[index].platform;
          if(!marketingCookies[platform]){
              marketingCookies[platform] = []
          };
          marketingCookies[platform].push({
              id: matchedCookies[index].id,
              platform: matchedCookies[index].platform,
              category: matchedCookies[index].category,
              data_key: matchedCookies[index].data_key,
              domain: matchedCookies[index].domain,
              description: matchedCookies[index].description,
              retention_period: matchedCookies[index].retention_period,
              data_controller: matchedCookies[index].data_controller,
              privary_rights_portals: matchedCookies[index].privary_rights_portals,
              wildcard_match: matchedCookies[index].wildcard_match,
          });
  
      }
    });
  }
  
  //update each cookies
  function updateCookies(){
  
    if(Object.keys(necessaryCookies).length < 1){
      necessaryElements.push(`
        <div class="cookies">
          <p class="consent-descriptions">No cookie to display</p>
        </div>
      `);
    }else{
      //necessary cookies updated
    for (const platform in necessaryCookies) {
      const platformCookies = necessaryCookies[platform].length;
      necessaryElements.push(`
        <div class="cookies">
          <div class="cookie-provider">
            <div>
              <span class="cookie-provider-headline consent-headlines">${platform}</span>
              <div class="totalCookiesWrapper">
              <span class="totalCookies">${platformCookies}</span>
              </div>
            </div>
            <div>
              <span class="material-symbols-outlined cookieProvideIcon">expand_more</span>
            </div>
          </div>
    
          <div class="cookie-learn-more-wrapper">
            <span class="cookie-learn-more"><a target="_blank" href="${necessaryCookies[platform][0].privary_rights_portals}">Learn More about the provider</a></span>
            <span class="material-symbols-outlined">open_in_new</span>
          </div>
      `);
    
      // Create .actual-cookie-wrapper for each object within the platform array
      necessaryCookies[platform].forEach(function(cookieObject) {
        necessaryElements.push(`
          <div class="actual-cookie-wrapper" style="display:none">
  
            <div>
              <span class="consent-headlines">${cookieObject.data_key}</span\>
    </div>
    <div>
    <span class="consent-descriptions">${cookieObject.description}</span>
            </div>
            <div class="hr-making"></div>
            <div>
              <span class="consent-headlines">Expiry:</span>
              <span class="consent-descriptions">${cookieObject.retention_period}</span>
            </div>
            <div>
              <span class="consent-headlines">Type:</span>
              <span class="consent-descriptions">HTTP</span>
            </div>
          </div>
          
        `);
      });
    
      necessaryElements.push(`
        </div>
      `);
      
      }
    }
    
  
    
  
    document.getElementById("totalNecessaryCookies").textContent = Object.keys(necessaryCookies).length;
    getNecessarySection.innerHTML += necessaryElements.join("");
  
  
    //preferences cookies updated
  
    if(Object.keys(preferencesCookies).length < 1){
      preferencesElements.push(`
        <div class="cookies">
          <p class="consent-descriptions">No cookie to display</p>
        </div>
      `);
    }else{
      for (const platform in preferencesCookies) {
        const platformCookies = preferencesCookies[platform].length;
        preferencesElements.push(`
          <div class="cookies">
            <div class="cookie-provider">
              <div>
                <span class="cookie-provider-headline consent-headlines">${platform}</span>
                <div class="totalCookiesWrapper">
                <span class="totalCookies">${platformCookies}</span>
                </div>
              </div>
              <div>
                <span class="material-symbols-outlined cookieProvideIcon">expand_more</span>
              </div>
            </div>
      
            <div class="cookie-learn-more-wrapper">
              <span class="cookie-learn-more"><a href="${preferencesCookies[platform][0].privary_rights_portals}" target="_blank">Learn More about the provider</a></span>
              <span class="material-symbols-outlined">open_in_new</span>
            </div>
        `);
      
        // Create .actual-cookie-wrapper for each object within the platform array
        preferencesCookies[platform].forEach(function(cookieObject) {
          preferencesElements.push(`
            <div class="actual-cookie-wrapper" style="display:none">
              <div>
                <span class="consent-headlines">${cookieObject.data_key}</span\>
            </div>
            <div>
            <span class="consent-descriptions">${cookieObject.description}</span>
              </div>
              <div class="hr-making"></div>
              <div>
                <span class="consent-headlines">Expiry:</span>
                <span class="consent-descriptions">${cookieObject.retention_period}</span>
              </div>
              <div>
                <span class="consent-headlines">Type:</span>
                <span class="consent-descriptions">HTTP</span>
              </div>
            </div>
          `);
        });
      
        preferencesElements.push(`
          </div>
        `);
        
      }
    }
  
  
    
  
    document.getElementById("totalPreferencesCookies").textContent = Object.keys(preferencesCookies).length;
    getPreferencesSection.innerHTML += preferencesElements.join("");
  
    //analytics cookies updated
    if(Object.keys(analyticsCookies).length < 1){
      analyticsElements.push(`
        <div class="cookies">
          <p class="consent-descriptions">No cookie to display</p>
        </div>
      `);
    }else{
      for (const platform in analyticsCookies) {
        const platformCookies = analyticsCookies[platform].length; // Store the array for the platform
        analyticsElements.push(`
          <div class="cookies">
            <div class="cookie-provider">
              <div>
                <span class="cookie-provider-headline consent-headlines ">${platform}</span>
                <div class="totalCookiesWrapper">
                <span class="totalCookies">${platformCookies}</span>
                </div>
              </div>
              <div>
                <span class="material-symbols-outlined cookieProvideIcon">expand_more</span>
              </div>
            </div>
      
            <div class="cookie-learn-more-wrapper">
              <span class="cookie-learn-more"><a href="${analyticsCookies[platform][0].privary_rights_portals}" target="_blank">Learn More about the provider</a></span>
              <span class="material-symbols-outlined">open_in_new</span>
            </div>
        `);
      
        // Create .actual-cookie-wrapper for each object within the platform array
        analyticsCookies[platform].forEach(function(cookieObject) {
          analyticsElements.push(`
            <div class="actual-cookie-wrapper" style="display:none">
              <div>
                <span class="consent-headlines">${cookieObject.data_key}</span\>
      </div>
      <div>
      <span class="consent-descriptions">${cookieObject.description}</span>
              </div>
              <div class="hr-making"></div>
              <div>
                <span class="consent-headlines">Expiry:</span>
                <span class="consent-descriptions">${cookieObject.retention_period}</span>
              </div>
              <div>
                <span class="consent-headlines">Type:</span>
                <span class="consent-descriptions">HTTP</span>
              </div>
            </div>
          `);
        });
      
        analyticsElements.push(`
          </div>
        `);
        
      }
    }
  
    
  
    document.getElementById("totalAnalyticsCookies").textContent = Object.keys(analyticsCookies).length;
    getAnalyticsSection.innerHTML += analyticsElements.join("");
  
    //marketing cookies updated
    if(Object.keys(marketingCookies).length < 1){
      marketingElements.push(`
        <div class="cookies">
          <p class="consent-descriptions">No cookie to display</p>
        </div>
      `);
    }else{
      for (const platform in marketingCookies) {
        const platformCookies = marketingCookies[platform].length;
        marketingElements.push(`
          <div class="cookies">
            <div class="cookie-provider">
              <div>
                <span class="cookie-provider-headline consent-headlines">${platform}</span>
                <div class="totalCookiesWrapper">
                <span class="totalCookies">${platformCookies}</span>
                </div>
              </div>
              <div>
                <span class="material-symbols-outlined cookieProvideIcon">expand_more</span>
              </div>
            </div>
      
            <div class="cookie-learn-more-wrapper">
              <span class="cookie-learn-more"><a href="${marketingCookies[platform][0].privary_rights_portals}" target="_blank">Learn More about the provider</a></span>
              <span class="material-symbols-outlined">open_in_new</span>
            </div>
        `);
      
        // Create .actual-cookie-wrapper for each object within the platform array
        marketingCookies[platform].forEach(function(cookieObject) {
          marketingElements.push(`
            <div class="actual-cookie-wrapper" style="display:none">
              <div>
                <span class="consent-headlines">${cookieObject.data_key}</span\>
      </div>
      <div>
      <span class="consent-descriptions">${cookieObject.description}</span>
              </div>
              <div class="hr-making"></div>
              <div>
                <span class="consent-headlines">Expiry:</span>
                <span class="consent-descriptions">${cookieObject.retention_period}</span>
              </div>
              <div>
                <span class="consent-headlines">Type:</span>
                <span class="consent-descriptions">HTTP</span>
              </div>
            </div>
          `);
        });
      
        marketingElements.push(`
          </div>
        `);
        
      }
    }
    
  
    document.getElementById("totalMarketingCookies").textContent = Object.keys(marketingCookies).length;
    getMarketingSection.innerHTML += marketingElements.join("");
  
  }
  
  // general codes
  function generalCode(){
  
  var cookieCatagory = document.querySelectorAll(".cookieCatagory");
  var cookies = document.querySelectorAll(".all-cookies");
  var catagoryIcon = document.querySelectorAll(".catagoryIcon");
  
  for(let i = 0; i < cookieCatagory.length; i++){
      cookieCatagory[i].onclick = function (){
          if(cookies[i].style.display == "none"){
              cookies[i].style.display = "block"
          }else if(cookies[i].style.display == "block"){
              cookies[i].style.display = "none"
          }
  
          //rotate the icon
          if(catagoryIcon[i].style.transform === "rotate(180deg)"){
            catagoryIcon[i].style.transform = "rotate(360deg)";
          }else{
            catagoryIcon[i].style.transform = "rotate(180deg)";
          }
      }
  }
  
  
  var cookieProviderHeadlines = document.querySelectorAll(".cookies .cookie-provider");
  var cookieProvideIcons = document.querySelectorAll(".cookieProvideIcon");
  
  for(let i = 0; i < cookieProvideIcons.length; i++){
    cookieProvideIcons[i].style.transform = "rotate(360deg)";
  }
  
  cookieProviderHeadlines.forEach(function(headline, index) {
    headline.onclick = function() {
      var actualCookieWrappers = this.closest(".cookies").querySelectorAll(".actual-cookie-wrapper");
  
      actualCookieWrappers.forEach(function(wrapper) {
        wrapper.style.display = wrapper.style.display === "none" ? "flex" : "none";
      });
  
      // Rotate corresponding cookieProvideIcon
      var cookieProvideIcon = cookieProvideIcons[index];
      if (cookieProvideIcon.style.transform === "rotate(360deg)"){
        cookieProvideIcon.style.transform = "rotate(180deg)";
      } else {
        cookieProvideIcon.style.transform = "rotate(360deg)";
      }
    };
  });
  
  
  
  var prefBtn = document.getElementById("preferenceConsentButton");
  
  var navItems = document.querySelectorAll(".nav-item");
  var contentSections = document.querySelectorAll(".section-content");
  





// Event listener for navigation items
navItems.forEach((item, index) => {
  item.onclick = () => {
      // Hide all content sections and remove border from all navigation items
      contentSections.forEach((section, idx) => {
          section.style.display = 'none';
          navItems[idx].style.borderBottom = 'none';
      });

      if(navItems[index].innerText === "Details"){
        prefBtn.innerText = "PREFERENCIA"
      }else{
        prefBtn.innerText = "PREFERENCIA"
      }

      // Display the selected content section and apply border to the selected navigation item
      if (contentSections[index]) {
          contentSections[index].style.display = 'block';
      }
      item.style.borderBottom = '2px solid #3771ce';
  };
});

  
  




  }
  
  
  matchingCookies();
  updateCookies();
  generalCode();
  
  
  
  