const reveal = ()=>{
    const ratio =.1
    const option = {
        root : null,
        rootMargin: '0px',
        threshold: ratio
    }

    const handelIntersect = function(entries ,observer){
    entries.forEach(function(entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
    }
    const observer = new IntersectionObserver(handelIntersect ,option)
    document.querySelectorAll('.reveal').forEach((r)=>{
    observer.observe(r)
    })
}

export default reveal

const rx = width/param.width;
    const ry = height/param.height
    const r = Math.max(rx, ry);

    const nw = width/r;
    const nh = height/r

    const ox = (param.width - nw)/2
    const oy = (param.height - nh)/2
       