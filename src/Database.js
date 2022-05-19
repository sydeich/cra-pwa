class Database {
    static first_time = (db) => {
        const checklists = db.createObjectStore("checklists", {
            autoIncrement: true,
        });
        const categories = db.createObjectStore("categories", {
            autoIncrement: true,
        });
        const properties = db.createObjectStore("properties", {
            autoIncrement: true,
        });
    };
    static Properties = class Properties {
        static insert = async({ db, category, title }) => {
            const txn = db.transaction("properties", "readwrite");
            const properties = txn.objectStore("properties");
            return await properties.add({
                category,
                title,
                active: false,
            });
        };
        static getById = async({ db, id }) => {
            const txn = db.transaction("properties", "readwrite");
            const properties = txn.objectStore("properties");
            return await properties.get(id);
        };
        static update = async({ db, id, newData }) => {
            let data = await Database.Properties.getById({ db, id });
            data = {...data, ...newData };
            const txn = db.transaction("properties", "readwrite");
            const properties = txn.objectStore("properties");
            properties.put(data, id);
        };
        static clear = async({ db }) => {
            const txn = db.transaction("properties", "readwrite");
            const properties = txn.objectStore("properties");
            await properties.clear();
        };
        static all = async({ db }) => {
            const txn = db.transaction("properties", "readonly");
            const objectStore = txn.objectStore("properties");
            const keys = await objectStore.getAllKeys();
            return (await objectStore.getAll()).map((item, index) => {
                return { id: keys[index], ...item };
            });
        };
        static delete = async({ db, id }) => {
            const txn = db.transaction("properties", "readwrite");
            const properties = txn.objectStore("properties");
            await properties.delete(id);
        };
    };
    static Categories = class Catgories {
        static insert = async({ db, title, checklist }) => {
            const txn = db.transaction("categories", "readwrite");
            const categories = txn.objectStore("categories");
            return await categories.add({
                checklist,
                title,
            });
        };
        static clear = async({ db }) => {
            const txn = db.transaction("categories", "readwrite");
            const categories = txn.objectStore("categories");
            await categories.clear();
        };
        static all = async({ db }) => {
            const txn = db.transaction("categories", "readonly");
            const objectStore = txn.objectStore("categories");
            const keys = await objectStore.getAllKeys();
            return (await objectStore.getAll()).map((item, index) => {
                return { id: keys[index], ...item };
            });
        };
        static delete = async({ db, id }) => {
            const txn = db.transaction("categories", "readwrite");
            const categories = txn.objectStore("categories");
            await categories.delete(id);
        };
    };
    static Checklists = class Checklists {
        static insert = async({ db, title }) => {
            const txn = db.transaction("checklists", "readwrite");
            const checklists = txn.objectStore("checklists");
            return await checklists.add({
                title,
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
        static delete = async({ db, id }) => {
            const txn = db.transaction("checklists", "readwrite");
            const checklists = txn.objectStore("checklists");
            await checklists.delete(id);
        };
    };
}
export default Database;