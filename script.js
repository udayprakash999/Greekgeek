let cardName = document.querySelectorAll(".name");
let cardProfile = document.querySelector(".card-profile");

cardName.forEach((name) => {
  name.addEventListener("mouseover", () => {
    let profile = name.getAttribute("data-profile");
    cardProfile.style.background = `url(${profile}.png)`;
  });
});

let container = document.getElementById("container");
let sections = document.querySelectorAll("section");
let main = document.querySelector(".container-profile");
const options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.2,
};

const BASE_URL = "https://greekgeek-ygnt.onrender.com";

  function copyEndpoint(inputId, button) {
    const inputField = document.getElementById(inputId);
    const fullUrl = `${BASE_URL}${inputField.value}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      const originalText = button.textContent;
      button.textContent = "Copied!";
      
      setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    });
  }



const characterExample = `{
      "name": "Zeus",
      "type": "God",
      "domain": "Sky and Thunder",
      "title": "King of the Gods",
      "parentage": {
        "father": "Cronus",
        "mother": "Rhea"
      },
      "symbols": ["Thunderbolt", "Eagle", "Oak Tree"],
      "associatedAnimals": ["Eagle", "Bull"],
      "description": "Zeus is the king of the Olympian gods and ruler of Mount Olympus. He governs the sky, thunder, and law.",
      "notableMyths": [
        {
          "title": "The Defeat of Cronus",
          "summary": "Zeus led his siblings to overthrow their father, Cronus, and established the rule of the Olympians."
        },
        {
          "title": "The Abduction of Europa",
          "summary": "Zeus transformed into a bull and carried Europa across the sea to Crete."
        },
        {
          "title": "The Punishment of Prometheus",
          "summary": "Zeus punished Prometheus for giving fire to humans by chaining him to a rock where an eagle ate his liver daily."
        }
      ],
      "relationships": {
        "spouse": "Hera",
        "siblings": ["Hades", "Poseidon", "Hera", "Demeter", "Hestia"],
        "children": [
          "Athena",
          "Apollo",
          "Artemis",
          "Ares",
          "Hermes",
          "Dionysus",
          "Hercules (Heracles)"
        ]
      }
    }
`;
const monsterExample =`{
      "name": "Typhon",
      "type": "Serpentine Monster",
      "physicalCharacteristics": {
        "appearance": "A gigantic being with a hundred dragon heads emerging from his shoulders, serpentine legs, and wings.",
        "size": "Colossal",
        "abilities": ["Hurricane winds", "Fire breathing", "Immense strength"]
      },
      "parentage": {
        "father": "Tartarus",
        "mother": "Gaia"
      },
      "domain": "Mount Etna and surrounding areas",
      "symbols": ["Serpent", "Volcano"],
      "associatedAnimals": ["Dragons", "Serpents"],
      "description": "Typhon is the 'Father of Monsters' who challenged Zeus for control of the cosmos. His defeat led to his imprisonment under Mount Etna.",
      "notableMyths": [
        {
          "title": "The Battle with Zeus",
          "summary": "Typhon fought Zeus in a massive battle for supremacy, ultimately being defeated and buried under Mount Etna."
        }
      ],
      "relationships": {
        "spouse": "Echidna",
        "children": ["Hydra", "Cerberus", "Chimera", "Orthrus"]
      },
      "weaknesses": ["Lightning bolts"],
      "roleInMythology": "Represents chaos and primal destructive power."
    },
`;
const placeExample =`{
      "name": "Mount Olympus",
      "type": "Mountain",
      "physicalCharacteristics": {
        "appearance": "A towering mountain, the highest in Greece, often covered in clouds and mist.",
        "size": "Gigantic",
        "features": ["Snow-capped peaks", "Divine homes", "Cloud-covered"]
      },
      "importance": "Home of the gods in Greek mythology",
      "symbols": ["Thunder", "Mountains", "Gods"],
      "associatedDeities": [
        "Zeus",
        "Hera",
        "Poseidon",
        "Athena",
        "Apollo",
        "Artemis",
        "Ares",
        "Hephaestus",
        "Hermes"
      ],
      "description": "Mount Olympus is the legendary home of the Olympian gods. It is considered a place of divine power and beauty, inaccessible to mortals, where the gods lived and held their councils.",
      "notableMyths": [
        {
          "title": "The Gods on Mount Olympus",
          "summary": "Mount Olympus served as the dwelling place of the major gods of Greek mythology, where they lived in palaces and held the power to control the fate of mortals and immortals alike."
        }
      ],
      "roleInMythology": "Represents the divine realm, the ultimate symbol of power and divine authority, where the gods reside and make important decisions about the world."
    }`;
const weaponExample = ` {
      "name": "Zeus' Thunderbolt",
      "type": "Divine Weapon",
      "associated_with": "Zeus",
      "description": "A powerful weapon capable of causing thunder and lightning, wielded by Zeus, the king of the gods. It represents his authority over the sky and is a symbol of divine power and destruction.",
      "powers": [
        "Thunder and lightning control",
        "Storm manipulation",
        "Destructive force",
        "Symbol of divine authority"
      ],
      "mythological_significance": "Zeus' Thunderbolt is one of the most famous and feared weapons in Greek mythology, often used to punish those who anger the gods or defy divine authority.",
      "appearance": "A radiant, glowing bolt of lightning that can strike with immense speed and force.",
      "notable_users": ["Zeus"],
      "related_arts": [
        "Zeus is often depicted holding the thunderbolt in ancient Greek art, showing his dominance over the skies."
      ]
    }`;

const preCharacterElement = document.getElementById("character-example");
preCharacterElement.textContent = characterExample;

const preMonsterElement = document.getElementById("monster-example");
preMonsterElement.textContent = monsterExample;

const prePlaceElement = document.getElementById("place-example");
prePlaceElement.textContent = placeExample;

const preWeaponElement = document.getElementById("weapon-example");
preWeaponElement.textContent = weaponExample;
