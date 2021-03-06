export const LABELS = [
  {name: "bug",              color: "ee0701"},
  {name: "documentation",    color: "1d76db"},
  {name: "feature",          color: "0052cc"},
  {name: "help wanted",      color: "b60205"},
  {name: "please close",     color: "076616"},
  {name: "question",         color: "cc317c"},
  {name: "ready to merge",   color: "0e8a10"},
  {name: "tech debt",        color: "5319e7"},
  {name: "work in progress", color: "fbca04"}
]

export const LABEL_NAMES = LABELS.map(label => label.name)

export const reduceLabels = (acc, elem) => {
  acc[elem.name] = elem.color
  return acc
}

export const LABEL_COLORS = LABELS.reduce(reduceLabels, {})
