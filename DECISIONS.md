# Candidate Decisions & Notes

## 1. State Management & Architecture

I followed a **feature-based modular architecture** to keep the codebase
scalable and maintainable. Product-related logic (API calls, hooks, UI
components) was separated into dedicated layers — keeping concerns isolated
and easy to extend.

For server state management, I chose **TanStack React Query** because the
assignment explicitly involves a flaky, slow API. React Query gave me:

- Built-in **loading, error, and fetching states** out of the box
- **Automatic caching** via queryKey-based deduplication
- **prefetchQuery** support for next-page preloading on pagination
- Clean separation between server state and local UI state

Local UI state (search, category, page) is managed with plain `useState`
since these are ephemeral UI concerns — no global store was needed.

To handle the **flaky and slow API**, I implemented:

- **Skeleton UI** (`CardSkeleton`) during initial load for better perceived
  performance
- **Error state** with a clear message shown to the user
- **`isFetching` flag** passed to `Pagination` to disable it during
  background refetches, preventing rapid-click race conditions
- **Debounced search** (`useDebounce`, 500ms) to avoid firing an API call
  on every keystroke
- **Page reset** when search or category changes, preventing invalid
  page + filter combinations
- **Next-page prefetching** so pagination feels instant

---

## 2. Trade-offs and Omissions

### Conscious trade-offs:

- **No AbortController / request cancellation** — React Query handles
  stale queries by ignoring outdated responses internally, which covers the
  most common race condition. Explicit AbortController would add more
  robustness but was deprioritized for scope.
- **No optimistic UI** — not applicable for a read-only product listing.
- **No global state library (Redux/Zustand)** — unnecessary for this scope;
  React Query handles server state, `useState` handles UI state.
- **No advanced normalization** — products are fetched per-page and not
  merged into a normalized cache, which is acceptable for a paginated list.

### If I had more time, I would add:

- **Unit and integration tests** (React Testing Library + MSW for API mocks)
- **UI Design System** (Introducing a custom, reusable UI design system to improve consistency, scalability, and long-term maintainability of components.)
- **Accessibility improvements** (ARIA live regions for loading state,
  keyboard navigation on pagination)
- **Error boundary** at the section level for unexpected render errors
- **URL-synced filters** (search/category/page in query params) so the
  state survives refresh and is shareable
- Request cancellation (AbortController) to prevent race conditions
- Retry UI button using refetch
- Error boundary for unexpected UI crashes

---

## 3. AI Usage

I used AI tools (primarily ChatGPT) as a **supportive assistant** during
development — to validate architectural decisions, compare approaches, and
identify edge cases. All suggestions were reviewed and manually validated
before use.

---

## 4. Edge Cases Identified & Handled

| Edge Case                  | Handling                              |
| -------------------------- | ------------------------------------- |
| Rapid pagination clicks    | `disabled={isFetching}` on Pagination |
| Search/filter + stale page | Page reset to 1 on filter change      |
| Empty results              | "No products found" message rendered  |
| API failure                | Error message shown to user           |
| Keystroke-per-call spam    | 500ms debounce on search input        |
| Next page latency          | Prefetched via `prefetchQuery`        |

### Not handled (known gaps):

- Explicit `AbortController` for in-flight request cancellation
- Retry button for manual re-fetch after error
- URL-based state persistence
