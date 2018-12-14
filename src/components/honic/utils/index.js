import tinycolor from 'tinycolor2';
let utils = {}
let rules = []
utils.hexToRgbaString = function (hex, alpha) {
  let color = tinycolor(hex)
  color.toRgbString(); // "rgb(255, 0, 0)"
  color.setAlpha(alpha);
  return color.toRgbString(); // "rgba(255, 0, 0, 0.5)"
}
function findKeyframesRule(animateName) {
  let rule
  let ss = document.styleSheets;
  for (let i = 0; i < ss.length; ++i) {
    for (let x = 0; x < ss[i].cssRules.length; ++x) {
      rule = ss[i].cssRules[x];
      if (rule.name === animateName && (rule.type === CSSRule.KEYFRAMES_RULE || ss[i].cssRules[j].type === CSSRule.WEBKIT_KEYFRAMES_RULE )){
        rules.push(rule)
      }
    }
  }

}
//删除旧的动画添加新的
utils.changeKeyframesColor = function (animateName,orign,end)
{
  if (rules.length === 0) {
    findKeyframesRule(animateName);
  }
  // console.log(orign)
  // console.log(end)
  // console.log(keyframes)
  rules.forEach((keyframes) => {
    keyframes.cssRules[0].style.background = orign
    keyframes.cssRules[1].style.background = end
  })
  // 删除已经存在的开始和结束帧
  // keyframes.deleteRule("0%");
  // keyframes.deleteRule("100%");
  // keyframes.appendRule("0% { background:" + orign + "; }");
  // keyframes.appendRule("100% { background:" + end + "; }");
  // console.log(keyframes)
}
export default utils
