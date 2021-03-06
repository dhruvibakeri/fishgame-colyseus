```
.
├── Admin
│   ├── README.md
│   ├── manager-interface.ts
│   ├── referee-tests.spec.ts
│   └── referee.ts
├── Common
│   ├── README.md
│   ├── executables
│   │   ├── xBoard
│   │   │   ├── xBoard.spec.ts
│   │   │   └── xBoard.ts
│   │   ├── xState
│   │   │   ├── xState.spec.ts
│   │   │   └── xState.ts
│   │   ├── xStrategy
│   │   │   ├── xStrategy.spec.ts
│   │   │   └── xStrategy.ts
│   │   └── xTree
│   │       ├── xTree.spec.ts
│   │       └── xTree.ts
│   ├── frontend
│   │   ├── assets
│   │   │   ├── banner.jpg
│   │   │   ├── black.png
│   │   │   ├── brown.png
│   │   │   ├── data.csv
│   │   │   ├── data.json5
│   │   │   ├── data.toml
│   │   │   ├── data.xml
│   │   │   ├── data.yaml
│   │   │   ├── favicon.ico
│   │   │   ├── fish.png
│   │   │   ├── icon.png
│   │   │   ├── red.png
│   │   │   └── white.png
│   │   ├── frontend-canvas.ts
│   │   ├── frontend.ts
│   │   ├── importData.js
│   │   └── styles
│   │       ├── myfont.woff
│   │       ├── reset.css
│   │       └── style.css
│   ├── game-tree
│   │   └── game-tree-state.ts
│   ├── graphics
│   │   ├── board-tiles-to-hex-tiles.ts
│   │   ├── render-frontend.ts
│   │   └── render-state.ts
│   ├── minimax
│   │   ├── best-action-game-state.ts
│   │   ├── best-action-tests.spec.ts
│   │   ├── placement-strategy-game-state.ts
│   │   └── placement-strategy-tests.spec.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── server
│   │   ├── backend.ts
│   │   └── lazy-tree-fold.ts
│   ├── start-backend.ts
│   ├── states
│   │   ├── README.md
│   │   ├── binary-state
│   │   │   ├── binary-state-constructors.ts
│   │   │   ├── binary-state-data-definition.ts
│   │   │   ├── binary-state-examples.ts
│   │   │   ├── binary-state-predicates.ts
│   │   │   ├── binary-state-selectors.ts
│   │   │   ├── binary-state-template.ts
│   │   │   └── dimension-to-binary-board.ts
│   │   ├── compact-state
│   │   │   ├── compact-board-reachable.ts
│   │   │   ├── compact-state-constructors.ts
│   │   │   ├── compact-state-data-definition.ts
│   │   │   ├── compact-state-examples.ts
│   │   │   ├── compact-state-functions.ts
│   │   │   ├── compact-state-interface.ts
│   │   │   ├── compact-state-predicates.ts
│   │   │   ├── compact-state-selectors.ts
│   │   │   └── compact-state-template.ts
│   │   ├── game-state
│   │   │   ├── game-state-constructors.ts
│   │   │   ├── game-state-data-definition.ts
│   │   │   ├── game-state-examples.ts
│   │   │   ├── game-state-functions.ts
│   │   │   ├── game-state-predicates.ts
│   │   │   ├── game-state-reachable.ts
│   │   │   ├── game-state-selectors.ts
│   │   │   └── game-state-template.ts
│   │   ├── input-state
│   │   │   ├── input-state-constructors.ts
│   │   │   ├── input-state-data-definition.ts
│   │   │   ├── input-state-examples.ts
│   │   │   ├── input-state-interface.ts
│   │   │   ├── input-state-predicates.ts
│   │   │   ├── input-state-selectors.ts
│   │   │   └── input-state-template.ts
│   │   ├── schema-state
│   │   │   ├── schema-state-constructors.ts
│   │   │   ├── schema-state-data-definition.ts
│   │   │   ├── schema-state-examples.ts
│   │   │   ├── schema-state-predicates.ts
│   │   │   ├── schema-state-selectors.ts
│   │   │   └── schema-state-template.ts
│   │   └── state-to-state-translators
│   │       ├── compact-state-to-game-state.ts
│   │       ├── compact-state-to-schema-state.ts
│   │       ├── game-state-to-compact-game-state.ts
│   │       ├── input-state-to-compact-state
│   │       │   ├── input-state-to-compact-state-tests.spec.ts
│   │       │   └── input-state-to-compact-state.ts
│   │       ├── input-state-to-game-state
│   │       │   └── input-state-to-game-state.ts
│   │       └── schema-state-to-compact-state.ts
│   ├── tests
│   │   ├── README.md
│   │   ├── milestone-3-tests.spec.ts
│   │   ├── milestone-4-tests.spec.ts
│   │   ├── milestone-5-tests.spec.ts
│   │   ├── parse-test-fest.ts
│   │   └── tests.spec.ts
│   ├── tsconfig.backend.json
│   ├── tsconfig.frontend.json
│   ├── utils
│   │   ├── mouse-event-listeners.ts
│   │   ├── other-data-definitions.ts
│   │   ├── utility-functions.ts
│   │   └── webpack-imports.ts
│   └── webpack.config.js
├── Other
│   ├── README.md
│   ├── export-visualizations
│   ├── project-milestones
│   │   ├── 1-dot-game
│   │   │   └── README.md
│   │   ├── 2-the-game-pieces
│   │   │   └── README.md
│   │   ├── 3-the-game-state
│   │   │   ├── README.md
│   │   │   ├── board-example-1.png
│   │   │   └── board-example-2.png
│   │   ├── 4-the-game-tree
│   │   │   └── README.md
│   │   ├── 5-the-strategy
│   │   │   └── README.md
│   │   ├── 6-games
│   │   │   └── README.md
│   │   ├── Fish
│   │   │   ├── README.md
│   │   │   ├── board-paths.png
│   │   │   ├── board.png
│   │   │   ├── name-logo.png
│   │   │   ├── one-tile.png
│   │   │   └── penguin.png
│   │   ├── Fish-dot-com-a-Plan
│   │   │   └── README.md
│   │   └── README.md
│   ├── tree-push
│   └── visualizations
│       ├── board-examples
│       │   ├── board-examples.drawio
│       │   ├── board-examples.png
│       │   └── board-examples.svg
│       ├── board-to-matrix-construction
│       │   ├── board-to-matrix-construction.drawio
│       │   ├── board-to-matrix-construction.png
│       │   └── board-to-matrix-construction.svg
│       ├── game-tree-visualization
│       │   ├── game-tree-visualization.drawio
│       │   ├── game-tree-visualization.png
│       │   └── game-tree-visualization.svg
│       ├── referee-game-ai-separation
│       │   ├── referee-game-ai-separation.drawio
│       │   ├── referee-game-ai-separation.png
│       │   └── referee-game-ai-separation.svg
│       ├── rough-software-architecture
│       │   ├── rough-software-architecture.drawio
│       │   ├── rough-software-architecture.png
│       │   └── rough-software-architecture.svg
│       ├── tile-increase-size-flowchart
│       │   ├── tile-increase-size-flowchart.drawio
│       │   ├── tile-increase-size-flowchart.png
│       │   └── tile-increase-size-flowchart.svg
│       ├── tile-size-flowchart
│       │   ├── tile-size-flowchart.drawio
│       │   ├── tile-size-flowchart.png
│       │   └── tile-size-flowchart.svg
│       ├── tree-2-minimax
│       │   ├── tree-2-minimax.drawio
│       │   ├── tree-2-minimax.png
│       │   └── tree-2-minimax.svg
│       └── webpack-bundler
│           ├── webpack-bundler.drawio
│           ├── webpack-bundler.png
│           └── webpack-bundler.svg
├── Planning
│   ├── game-state.md
│   ├── games.md
│   ├── manager-protocol.md
│   ├── milestones.pdf
│   ├── player-protocol.md
│   ├── referee.md
│   ├── self-1.md
│   ├── self-2.md
│   ├── self-3.md
│   ├── self-4.md
│   ├── self-5.md
│   └── system.pdf
├── Player
│   ├── player.ts
│   └── strategy.ts
├── README.md
└── xtest
echo [error opening dir]

47 directories, 165 files
```
