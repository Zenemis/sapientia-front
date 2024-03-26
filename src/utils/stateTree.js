class StateTree {
    constructor(id, value, variants){
        this.id = id;
        this.value = value;
        this.variants = [...variants];
        this.children = [];
    }

    addChild(id, value, variants){
        const child = new StateTree(id, value, variants);
        this.children.push(child);
        return child;
    }
}

export default StateTree;