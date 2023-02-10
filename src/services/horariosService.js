export async function getHorarioList () {
  const response = await fetch('http://localhost:4000/1mkta');

  if (!response.ok){
    return false;
  }
}