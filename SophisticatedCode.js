/*
   Filename: SophisticatedCode.js
  
   Description: This code demonstrates a complex algorithm for solving the traveling salesman problem (TSP) using a genetic algorithm approach. 

   This algorithm utilizes a population of individuals, where each individual represents a possible solution. The individuals are evolved over multiple generations using selection, crossover, and mutation operators. The fitness of each individual is evaluated based on the total distance traveled. The algorithm optimizes the solution by continuously evolving the population until a satisfactory solution is found.

   Note: The TSP problem is NP-hard, meaning for large instance sizes optimal solutions cannot be determined in reasonable time. This algorithm provides an approximate solution that gets closer to optimality over generations.

   Author: Your Name
   Date: DD/MM/YYYY
*/

// Utility function to calculate the Euclidean distance between two points
function calculateDistance(x1, y1, x2, y2) {
  const xDiff = x2 - x1;
  const yDiff = y2 - y1;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

// Class representing an individual in the population
class Individual {
  constructor(genes) {
    this.genes = genes; // Array representing the order of cities visited
    this.fitness = 0; // Fitness value indicating the total distance traveled
  }

  // Calculate the fitness of this individual
  calculateFitness() {
    let totalDistance = 0;
    for (let i = 0; i < this.genes.length - 1; i++) {
      const cityA = this.genes[i];
      const cityB = this.genes[i + 1];
      const distance = calculateDistance(cityA.x, cityA.y, cityB.x, cityB.y);
      totalDistance += distance;
    }
    this.fitness = totalDistance;
  }

  // Crossover operator to create offspring from two parents
  static crossover(parent1, parent2) {
    const childGenes = [];
    const startPos = Math.floor(Math.random() * parent1.genes.length);
    const endPos = Math.floor(Math.random() * parent1.genes.length);

    for (let i = 0; i < parent1.genes.length; i++) {
      if (startPos < endPos && i > startPos && i < endPos) {
        childGenes.push(parent1.genes[i]);
      } else if (startPos > endPos && !(i < startPos && i > endPos)) {
        childGenes.push(parent1.genes[i]);
      }
    }

    for (let i = 0; i < parent2.genes.length; i++) {
      if (!childGenes.includes(parent2.genes[i])) {
        childGenes.push(parent2.genes[i]);
      }
    }

    return new Individual(childGenes);
  }

  // Mutation operator to introduce variation in the genes
  mutate() {
    const indexA = Math.floor(Math.random() * this.genes.length);
    const indexB = Math.floor(Math.random() * this.genes.length);
    const temp = this.genes[indexA];
    this.genes[indexA] = this.genes[indexB];
    this.genes[indexB] = temp;
  }
}

// Class representing the population
class Population {
  constructor(size) {
    this.individuals = new Array(size);
    this.bestIndividual = null;
  }

  // Initialize the population with random individuals
  initialize() {
    for (let i = 0; i < this.individuals.length; i++) {
      const randomGenes = shuffle([...cities]); // cities is an array of city objects
      const individual = new Individual(randomGenes);
      this.individuals[i] = individual;
    }
  }

  // Evolve the population for a given number of generations
  evolve(generations) {
    for (let i = 0; i < generations; i++) {
      this.calculateFitness();
      this.selection();
      this.crossover();
      this.mutation();
    }
  }

  // Calculate the fitness of each individual in the population
  calculateFitness() {
    for (let i = 0; i < this.individuals.length; i++) {
      this.individuals[i].calculateFitness();
      if (this.bestIndividual === null || this.individuals[i].fitness < this.bestIndividual.fitness) {
        this.bestIndividual = this.individuals[i];
      }
    }
  }

  // Perform selection to choose the fittest individuals for reproduction
  selection() {
    const tournamentSize = Math.floor(this.individuals.length / 10);
    const matingPool = [];

    for (let i = 0; i < this.individuals.length; i++) {
      const tournament = new Array(tournamentSize);
      for (let j = 0; j < tournamentSize; j++) {
        const randomIndex = Math.floor(Math.random() * this.individuals.length);
        tournament[j] = this.individuals[randomIndex];
      }
      tournament.sort((a, b) => a.fitness - b.fitness);
      matingPool.push(tournament[0]);
    }

    this.individuals = matingPool;
  }

  // Perform crossover to generate offspring
  crossover() {
    const newIndividuals = new Array(this.individuals.length);
    for (let i = 0; i < this.individuals.length; i += 2) {
      const parent1 = this.individuals[i];
      const parent2 = this.individuals[i + 1];
      const child1 = Individual.crossover(parent1, parent2);
      const child2 = Individual.crossover(parent2, parent1);
      newIndividuals[i] = child1;
      newIndividuals[i + 1] = child2;
    }
    this.individuals = newIndividuals;
  }

  // Perform mutation to introduce variation
  mutation() {
    for (let i = 1; i < this.individuals.length; i++) {
      this.individuals[i].mutate();
    }
  }
}

// Main program
const cities = [
  { x: 60, y: 200 },
  { x: 180, y: 200 },
  { x: 80, y: 180 },
  { x: 140, y: 180 },
  { x: 20, y: 160 },
  { x: 100, y: 160 },
  { x: 200, y: 160 },
  { x: 140, y: 140 },
  { x: 40, y: 120 },
  { x: 100, y: 120 },
  { x: 180, y: 100 },
  { x: 60, y: 80 },
  { x: 120, y: 80 },
  { x: 180, y: 60 },
  { x: 20, y: 40 },
  { x: 100, y: 40 },
  { x: 200, y: 40 },
  { x: 20, y: 20 },
  { x: 60, y: 20 },
  { x: 160, y: 20 }
];

const populationSize = 100;
const generations = 500;

const population = new Population(populationSize);
population.initialize();
population.evolve(generations);

console.log("Best Individual:", population.bestIndividual);
console.log("Best Fitness:", population.bestIndividual.fitness);

// Utility function to shuffle an array
function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
