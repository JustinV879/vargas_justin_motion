while (true) {
    console.log("Rotation of Degrees x axis" + input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) > 15) {
        light.setAll(light.rgb(255, 255, 255))
    } else {
        light.clear()
    }
    
}
