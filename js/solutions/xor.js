/**
 * Реализовать XOR при помощи and, or, not.
 */

Module.XOR = (a, b) => ((a | b) & (!a | !b));

