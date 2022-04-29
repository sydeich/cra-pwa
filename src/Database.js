class Database {
    static first_time = (db) => {
        const checklists = db.createObjectStore("checklists", {
            autoIncrement: true
        });
    }
    static Checklists = class Checklists {
        static insert = async({ db, title }) => {
            const txn = db.transaction("checklists", "readwrite");
            const checklists = txn.objectStore("checklists");
            return await checklists.add({
                title
            });
        };
        static clear = async({ db }) => {
            const txn = db.transaction("checklists", "readwrite");
            const checklists = txn.objectStore("checklists");
            await checklists.clear();
        };
        static all = async({ db }) => {
            const txn = db.transaction("checklists", "readonly");
            const objectStore = txn.objectStore("checklists");
            const keys = await objectStore.getAllKeys();
            return (await objectStore.getAll()).map((item, index) => {
                return { id: keys[index], ...item };
            });
        };
        static getById = async({ db, id }) => {
            const txn = db.transaction("checklists", "readwrite");
            const checklists = txn.objectStore("checklists");
            return await checklists.get(id);
        };
    };
}
export default Database;