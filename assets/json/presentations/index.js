const presentationDataFiles = require.context('.', true, /\.json$/)

const presentationData = {}

presentationDataFiles.keys().forEach((fileName) => {
  let fileData = presentationDataFiles(fileName)
  fileName = fileName.replace(/\.\//, '').replace(/\.json/, '')
  const [theme, year, title] = fileName.split('/', 3)
  if (!presentationData[theme]) {
    presentationData[theme] = {}
  }
  if (!presentationData[theme][year]) {
    presentationData[theme][year] = []
  }
  fileData = fileData.default || fileData
  fileData = { ...fileData, title }
  presentationData[theme][year].push(fileData.default || fileData)
})

export default presentationData
