const userDB = (dbname,table)=>{
    const db = new Dexie(dbname)
    db.version(1).stores(table);
    db.Open();

    return db;

}