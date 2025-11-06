export const blogPosts = [
  {
    id: 1,
    title: "Automatic Transaction Rollback - A new feature in Oracle 23ai",
    excerpt: "Explore the groundbreaking automatic transaction rollback feature in Oracle 23ai that revolutionizes error handling and transaction management in database operations.",
    date: "September 21, 2025",
    readTime: "8 min read",
    tags: ["Oracle 23ai", "Transactions", "Features"],
    content: `
# Automatic Transaction Rollback in Oracle 23ai

Oracle 23ai introduces automatic transaction rollback, a feature that significantly enhances error handling and transaction management.

## Key Benefits

- Automatic error recovery
- Reduced code complexity
- Improved transaction reliability
- Better error handling patterns

## Implementation

This feature automatically rolls back transactions when specific error conditions are met, eliminating the need for manual rollback code in many scenarios.
    `
  },
  {
    id: 2,
    title: "enq: TX – Row Lock Contention Handled in Oracle 23ai",
    excerpt: "Understanding row lock contention and how Oracle 23ai provides improved mechanisms to handle this common database performance issue.",
    date: "September 21, 2025",
    readTime: "10 min read",
    tags: ["Oracle 23ai", "Performance", "Locking"],
    content: `
# Understanding enq: TX - Row Lock Contention

## What is "enq: TX - row lock contention"?

A row is locked when one session attempts to modify data that is already being modified by another session. This creates contention that can impact database performance.

## Oracle 23ai Improvements

Oracle 23ai introduces advanced mechanisms to better handle and reduce row lock contention situations.

## Best Practices

- Implement proper transaction design
- Use appropriate isolation levels
- Monitor lock wait events
- Optimize transaction duration
    `
  },
  {
    id: 3,
    title: "What is ITL (Interested Transaction List)?",
    excerpt: "Deep dive into ITL concepts and how they affect Oracle database block structure and transaction management at the storage level.",
    date: "September 21, 2025",
    readTime: "12 min read",
    tags: ["Oracle Internals", "Storage", "Performance"],
    content: `
# Understanding ITL (Interested Transaction List)

## What is ITL?

ITL (Interested Transaction List) is a table stored in a block header that tracks transactions interested in rows within that block.

## ITL Structure

Each block header contains slots for tracking active transactions:
- Transaction ID
- Lock byte
- Undo block address
- Sequence number

## Performance Implications

Insufficient ITL slots can lead to:
- Block contention
- ITL waits
- Performance degradation

## Optimization Strategies

Configure appropriate INITRANS and MAXTRANS values based on your workload characteristics.
    `
  }
]
