
<a-entity bowling-balls></a-entity>
 
 var camera = document.querySelector("#camera").object3D;
 var direction =  new THREE.Vector3();
 camera.getWorldDirection(direction);
 ball.setAttribute("velcity",direction.multiplyScaler(-10));
 ball.addEventListener("collide",this.removeBall);
 removeBall  :function (e) {
    var element = e.detail.target.el;
    var elementHit = e.detail.body.el;
    if (elementHit.id.includea("pin")){
        var impulse = new CANNON.vec3().copy(
            elemntHit.getAttribute("position")
        );
        elemntHit.body.applyImpulse(impulse,new CANNON.vec3(0,0,0));
        element.removeEventListener("collide",this.removeBall);
        scene.removeChild(element);

    }

 },