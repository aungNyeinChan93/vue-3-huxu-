import { ref } from "vue";

const useCustomers = () => {
  const customers = ref([
    {
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main St",
      gender: "Male",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      address: "456 Oak St",
      gender: "Female",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      address: "789 Pine St",
      gender: "Female",
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      address: "101 Maple St",
      gender: "Male",
    },
    {
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      address: "202 Elm St",
      gender: "Male",
    },
    {
      name: "Diana Evans",
      email: "diana.evans@example.com",
      address: "303 Birch St",
      gender: "Female",
    },
    {
      name: "Evan Foster",
      email: "evan.foster@example.com",
      address: "404 Cedar St",
      gender: "Male",
    },
    {
      name: "Fiona Green",
      email: "fiona.green@example.com",
      address: "505 Spruce St",
      gender: "Female",
    },
    {
      name: "George Harris",
      email: "george.harris@example.com",
      address: "606 Willow St",
      gender: "Male",
    },
    {
      name: "Hannah White",
      email: "hannah.white@example.com",
      address: "707 Aspen St",
      gender: "Female",
    },
  ]);

  const gender_filter = (gender = '') => {
    if(gender){
      return customers.value.filter((customer) => customer.gender === gender);
    }else{
      return customers.value
    }
  };

  return { customers , gender_filter };
};

export default useCustomers;
