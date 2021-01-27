while True:
    print("Rotation of Degrees x axis" + input.rotation(Rotation.PITCH))
    if (input.rotation(Rotation.PITCH)) > 15:
        light.set_all(light.rgb(255,255,255))
    else:
        light.clear()