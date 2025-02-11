const potatoes = [ 
    { id: 1, type: 'Russet', color: 'Brown' },
    { id: 2, type: 'Red', color: 'Red' },
    { id: 3, type: 'Yukon Gold', color: 'Yellow' },
]

const getAllPotatoes = (req, res) => {
    res.json(potatoes);
};

const getPotatoById = (req, res) => {
    const id = parseInt(req.params.id); 
    const potato = potatoes.find(p => p.id === id);
    if (potato) {
        res.json(potato);
    } else {
        res.status(404).json({ message: 'Potato not found' });
    }
};

const createPotato = (req, res) => {
    const newPotato = {
        id: potatoes.length + 1, 
        ...req.body, 
    
    };
    potatoes.push(newPotato);
    res.status(201).json(newPotato); 
};

const updatePotato = (req, res) => {
    const id = parseInt(req.params.id);
    const index = potatoes.findIndex(p => p.id === id);
    if (index !== -1) {
        potatoes[index] = { ...potatoes[index], ...req.body }; 
        res.json(potatoes[index]);
    } else {
        res.status(404).json({ message: 'Potato not found' });
    }
};

const deletePotato = (req, res) => {
    const id = parseInt(req.params.id);
    const index = potatoes.findIndex(p => p.id === id);
    if (index !== -1) {
        potatoes.splice(index, 1);
        res.status(204).end(); 
    } else {
        res.status(404).json({ message: 'Potato not found' });
    }
};


module.exports = {
    getAllPotatoes,
    getPotatoById,
    createPotato,
    updatePotato,
    deletePotato,
};