console.log( "A" - "B" + "2");
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const intermediateAppPath = path.join(buildOutputPath, 'app');