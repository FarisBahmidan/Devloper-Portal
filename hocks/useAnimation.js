export const sleep = async (dlay) => {
  await new Promise(r => setTimeout(r, dlay))
}

export async function useYofiAnimation(styleName, set, AnimationArray) {
  var lastAnimation = styleName;
  for (let i = 0; i < AnimationArray.length; i++) {
    i > 0 && AnimationArray[i - 1].sleep ? await sleep(AnimationArray[i - 1].sleep) : null
    lastAnimation = { ...lastAnimation, ...AnimationArray[i].style }
    set(lastAnimation)
  }
}