function ShoppingList() {
    const [items, setItems] = useState([]);
  
    // Add this function
    function handleAddItem(newItem) {
      setItems([...items, newItem]);
    }
  
    // ... rest of the component
  }