const hamBurger = document.getElementsByClassName("hamburger")[0];
const mobileNav = document.getElementsByClassName("mobile-nav-menu")[0];
const closeBtn = document.getElementsByClassName('close-btn')[0];
const FeaturearrowDown = document.querySelectorAll('.Feature-icon-arrow-down');
const FeaturearrowUp = document.querySelectorAll('.Feature-icon-arrow-up');
const FeatureItems = document.getElementsByClassName('Feature-items')[0];
const Featureheading = document.getElementsByClassName("Feature-heading")[0];
const companyArrowDown = document.querySelectorAll('.Company-icon-arrow-down');
const companyArrowup = document.querySelectorAll('.Company-icon-arrow-up');
const companyHeading = document.getElementsByClassName('company-heading')[0];
const companyItems = document.getElementsByClassName('company-items')[0];
const FeatureTab = document.querySelectorAll('.nav-items-1')[0].childNodes[1]
const FeatureList = document.getElementsByClassName('Feature-items-lg')[0]
const companyTab = document.querySelectorAll('.nav-items-1')[0].childNodes[5]
const companyList = document.getElementsByClassName('Company-items-lg')[0]



hamBurger.addEventListener('click',() => {
    mobileNav.classList.add('show')
})

closeBtn.addEventListener('click',() => {
    mobileNav.classList.remove('show')
})



// Accordion toggle Feature
Featureheading.addEventListener('click', () => {
        const result = FeatureItems.classList.toggle('hidden')
        if(result) {
            FeaturearrowUp.forEach(item => {
                item.style.display = 'inline-block';
            })
            FeaturearrowDown.forEach(item => {
                item.style.display = 'none';
            })
        }
        else{
            FeaturearrowUp.forEach(item => {
                item.style.display = 'none';
            })
            FeaturearrowDown.forEach(item => {
                item.style.display = 'inline-block';
            })
        }
})

companyHeading.addEventListener('click', () => {
    const result = companyItems.classList.toggle('hidden')
    if (result){
        companyArrowup.forEach(item => {
            item.style.display = 'inline-block';
        })
        companyArrowDown.forEach(item => {
            item.style.display = 'none';
        })
    }
    else{
        companyArrowup.forEach(item => {
            item.style.display = 'none'
        })
        companyArrowDown.forEach(item => {
            item.style.display = 'inline-block'
        })
    }
})
//


FeaturearrowUp.forEach(item => {
    item.style.display = 'none';
})

companyArrowup.forEach(item => {
    item.style.display = 'none'
})

/* Nav Tab hovering effects */


FeatureTab.addEventListener('mouseover', () => {
      FeatureList.classList.add('show')

    FeatureList.addEventListener('mouseleave', () => {
        FeatureList.classList.remove('show')
    })
})

companyTab.addEventListener('mouseover', () => {
    companyList.classList.add('show')

    companyList.addEventListener('mouseleave', () => {
        companyList.classList.remove('show')
    })
})

FeatureTab.addEventListener('click', () => {
    console.log(FeatureTab)
})

