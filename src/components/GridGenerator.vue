<template>
  <div>
    <h1 ml-5vw text-left>Grid Generator</h1>
    <div bg-white flex flex-col md:flex-row lg:flex-row items-center justify-between w-90vw pb-5 pt-5 md:p-5 md:mt-2 lg:p-5 lg:mt-2 ma border-rd-2 shadow-md shadow-dark >
      <div flex flex-col items-center md:flex-row lg:flex-row >
        <span>Generate</span>
        <input
          v-model="numGrids"
          type="number"
          id="numGrids"
          :max="5"
          :min="0"
          p-2
          m-2
          w-15
          text-center
          border-rd-1
          bg-white
          :class="{ 'invalid-input': !isValidGrids }"
        />
  
        <span > random grids, each with </span>
        <input
          v-model="numRowsCols"
          type="number"
          id="numRowsCols"
          :max="5"
          :min="0"
          p-2
          m-2
          w-15
          text-center
          border-rd-1
          bg-white
          :class="{ 'invalid-input': !isValidRowsColumns }"
        />
        <span>rows/columns</span>
      </div>
      <button
        @click="generateGrids"
        :disabled="!isValidInput"
        border-none p-3 cursor-pointer border-rd-1
        bg-blue
        color-white
        border = "disabled:1px solid #999999"
        color="disabled:#666666"
        bg="disabled:#cccccc hover:#0056b3"
        cursor-default
        
      >
        Generate
      </button>
    </div>

    <div display-flex flex-wrap grid-justify-center mt-5 gap-5>
      <div v-for="(grid, gridIndex) in grids" :key="gridIndex" display-grid border-rd-5 border-black shadow-md shadow-dark text-center>
        <div flex justify-center grid-items-center  v-for="(row, rowIndex) in grid" :key="rowIndex">
          <div flex justify-center grid-items-center w-10 h-10 b-6 b-black b-solid font-bold v-for="(letter, colIndex) in row" :key="colIndex">
            {{ letter }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GridModel from "./GridModel";

export default {
  data() {
    return {
      numGrids: 0,
      numRowsCols: 0,
      grids: [],
    };
  },
  computed: {
    isValidRowsColumns() {
      return (
        this.numRowsCols > 0 &&
        this.numRowsCols < 6
      );
    },
    isValidGrids() {
      return (
        this.numGrids > 0 &&
        this.numGrids < 6 
      );
    },
    isValidInput() {
      return (
        this.isValidRowsColumns &&
        this.isValidGrids
      );
    },

  },
  
  methods: {
    generateGrids() {
      if (this.isValidInput) {
        this.grids = GridModel.generateGrids(this.numGrids, this.numRowsCols);
      }
    },
  },
};
</script>
