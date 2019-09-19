function growingPlant(upSpeed, downSpeed, desiredHeight) {
    return upSpeed > desiredHeight ? 1 : Math.floor(desiredHeight/(upSpeed - downSpeed));
}
