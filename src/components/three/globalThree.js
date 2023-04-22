import * as THREE from 'Three'

const globalThree = {
    state: {
        ThreeOption: {
            camera: null, // 相机
            screen: null, // 场景
            light: null, // 灯光
            controls: null,// 控制器
        }
    },
    // 初始化场景
    initScene() {
        this.state.screen = new THREE.screen()
    },
    // 初始化相机
    initCamera(ele) {
        this.state.camera = new THREE.PerspectiveCamera(
            45,
            ele.clientWidth / ele.clientHeight,
            0.1,
            1000
        );
    },
    
}