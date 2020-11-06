"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prelim2 = exports.prelim1 = exports.ex2 = exports.state0 = void 0;
// our examples
exports.state0 = [
    "playing",
    [
        [["black", 4], 1, 4, ["red", 0]],
        [["white", 3], "unusable", 5, "unusable"]
    ],
    [
        ["black", 0],
        ["white", 0],
        ["red", 0]
    ]
];
exports.ex2 = ["playing",
    [
        [["red", 1], 1, ["red", 1], "hole", ["black", 1], 1, ["black", 1], "hole"],
        [4, "hole", 4, "hole", 4, "hole", 4, "hole"],
        [["white", 1], ["brown", 1], "hole", "hole", ["white", 1], ["brown", 1], "hole", "hole"]
    ],
    [
        ["red", 0],
        ["black", 0],
        ["white", 0],
        ["brown", 0]
    ]
];
// Given examples
exports.prelim1 = [
    "playing",
    [
        [1, 1, 1, 1, 1, 1],
        ["hole", "hole", "hole", "hole", "hole", "hole"],
        [["red", 1], ["white", 1], ["red", 1], ["white", 1], ["red", 1], ["white", 1]],
        [["brown", 1], "unusable", ["brown", 1], "unusable", ["brown", 1], "unusable"]
    ],
    [
        ["red", 0],
        ["white", 0],
        ["brown", 0]
    ]
];
exports.prelim2 = [
    "playing",
    [
        [["red", 1], 1, 1, 1, 1, 1],
        ["hole", "hole", "hole", "hole", "hole", "hole"],
        [["red", 1], ["white", 1], ["red", 1], ["white", 1], "hole", ["white", 1]],
        [["brown", 1], "unusable", ["brown", 1], "unusable", ["brown", 1], "unusable"]
    ],
    [
        ["red", 0],
        ["white", 0],
        ["brown", 0]
    ]
];
//# sourceMappingURL=compact-state-examples.js.map