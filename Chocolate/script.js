const chocolates = [
  {
    id: "first",
    name: "Milk Chocolate",
    price: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAzp_IreM2j3vm1Q7nk6BQdsrQNKNxmR8exQ&usqp=CAU",
  },
  {
    id: "second",
    name: "Dark Chocolate",
    price: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOGC_TaL0ghPcOeI6paBQ97IZKZ5g66Facw&usqp=CAU",
  },
  {
    id: "third",
    name: "White Chocolate",
    price: 25,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVafJsVLBEWcDPnQVfBsEvp8wYd7gZj0HMyQ&usqp=CAU",
  },
  {
    id: "fourth",
    name: "Caramel Chocolate",
    price: 15,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs5fWKEUinK2X13akMIBNdVYAw4n5rlRLzOQ&usqp=CAU",
  },
  {
    id: "fifth",
    name: "Hazelnut Chocolate",
    price: 30,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRxkcsl3JNeoJiX8nJ3iwUBVPDrV1rYzABQ&usqp=CAU",
  },
  {
    id: "sixth",
    name: "Almond Chocolate",
    price: 40,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfINyL7liFsizAt33fdDEUJrK1uQ7W5zEuA&usqp=CAU",
  },
  {
    id: "seventh",
    name: "Raspberry Chocolate",
    price: 18,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ADh2tkVTqea0qMUckW5CJwYAsfynQ4Vw_Q&usqp=CAU",
  },
  {
    id: "eighth",
    name: "Mint Chocolate",
    price: 17,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9gDUTvZKCBUTlJaZ52M2h4_tU5jgPECnbNQ&usqp=CAU",
  },
  {
    id: "ninth",
    name: "Orange Chocolate",
    price: 12,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpW6kWYe89jN1s8XVoVa9Vx912OnOqXDGFsg&usqp=CAU",
  },
  {
    id: "tenth",
    name: "Cherry Chocolate",
    price: 15,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPPQ20QjyACyjnG2HgXOecXgt1tHi9S3ggw&usqp=CAU",
  },
  {
    id: "eleventh",
    name: "Coconut Chocolate",
    price: 20,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjyDVv9ND1-tAMKYvMRAncgc5UsMB_6aw5vw&usqp=CAU",
  },
  {
    id: "twelth",
    name: "Toffee Chocolate",
    price: 8,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC_Yz2_c_4_3rQdHUi8aTDIYyyj_riOaKvxw&usqp=CAU",
  },
  {
    id: "thirteenth",
    name: "Coffee Chocolate",
    price: 28,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mIQ4_t0wSfmxACKkf52HFfH6tIoTRjN36A&usqp=CAU",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const chocolateOptionsDiv = document.getElementById("chocolate-options");
  const selectedChocolatesUl = document.getElementById("selected-chocolates");
  const totalPriceSpan = document.getElementById("total-price");

  chocolates.forEach((chocolate) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = chocolate.name;
    checkbox.value = chocolate.price;
    checkbox.id = chocolate.id;
    checkbox.style.cursor = "pointer";
    checkbox.style.marginRight = "10px";
    checkbox.style.height = "20px";
    checkbox.style.width = "20px";
    checkbox.addEventListener("change", updateCustomPack);

    const label = document.createElement("label");

    const img_1 = document.createElement("img");
    img_1.src = chocolate.image;
    img_1.alt = chocolate.name;
    img_1.width = 100;
    img_1.style.borderRadius = "30px";
    img_1.style.border = "solid 1px #000";
    img_1.style.marginLeft = "10px";

    label.htmlFor = checkbox.id;
    label.style.cursor = "pointer";
    label.textContent = `${chocolate.name} - Rs ${chocolate.price.toFixed(2)}`;

    const div = document.createElement("div");
    div.style.padding = "10px";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(img_1);

    chocolateOptionsDiv.appendChild(div);
  });

  function updateCustomPack() {
    const selectedChocolates = Array.from(
      chocolateOptionsDiv.querySelectorAll("input:checked")
    );

    if (selectedChocolates.length <= 8) {
      const totalPrice = selectedChocolates.reduce(
        (total, chocolate) => total + parseFloat(chocolate.value),
        0
      );

      selectedChocolatesUl.innerHTML = "";

      selectedChocolates.forEach((chocolate) => {
        const li = document.createElement("li");
        li.textContent = `${chocolate.name} - Rs ${parseFloat(
          chocolate.value
        ).toFixed(2)}`;
        selectedChocolatesUl.appendChild(li);
      });

      totalPriceSpan.textContent = totalPrice.toFixed(2);
    } else {
      this.checked = false;
    }
  }
});
