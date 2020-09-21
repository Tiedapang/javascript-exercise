export default function find00OldPerson(collection) {
  const year = new Date().getFullYear();
  const result = collection.find(e => e.age < year - 2000 && e.age > year - 2010);
  return result.name;
}
