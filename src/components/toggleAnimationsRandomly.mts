export function toggleAnimationsRandomly() {
  const animationsTransform = document.querySelectorAll("animateTransform")

  animationsTransform.forEach((animationTransform) => {
    const animationElement = animationTransform

    const randomDecision = Math.random() > 0.5

    const rect = animationTransform.parentElement
    const opacityAnimation = rect?.querySelector(
      "animate[attributeName='opacity']",
    ) as SVGAnimateElement

    if (randomDecision) {
      animationElement?.beginElement()

      if (opacityAnimation) {
        opacityAnimation.beginElement()
      }
      return
    }

    animationElement.setAttribute("begin", "indefinite")

    if (opacityAnimation) {
      opacityAnimation.setAttribute("begin", "indefinite")
    }
  })
}
