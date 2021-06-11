function linkClicked (e) {
  console.log(e)
  if (document.querySelector('#link-container a.active-link') !== null) {
    document.querySelector('#link-container a.active-link').classList.remove('active-link');
  }
  e.target.className = 'active-link';
  
  const id = e.target.id
  let targetId
  if (id === 'product-link') {
    targetId = 'popular-item'
  } else if (id === 'store-link') {
    targetId = 'our-store'
  } else if (id === 'contact-link') {
    targetId = 'contact-us'
  }
  
  // Handle smooth scroll to target id
  const element = document.getElementById(targetId);
  const headerOffset = 85;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

async function hamburgerClick () {
  let icon = await document.getElementById('icon')
  console.log(icon.className)
  if (icon.className == 'fa fa-bars') {
    icon.classList.toggle('fa-close')
    icon.classList.remove('fa-bars')
  } else {
    icon.classList.remove('fa-close')
    icon.classList.toggle('fa-bars')
  }

  const linkContainer = document.getElementById('right').style
  console.log(linkContainer)
  if (linkContainer.height === '0px' || linkContainer.height === '') {
    linkContainer.height = '220px'
  } else {
    linkContainer.height = '0px'
  }

  
}