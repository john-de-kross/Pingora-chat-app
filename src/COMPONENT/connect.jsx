import { useMemo, useState } from "react";
import { Check, Search, UserPlus, Users, X } from "lucide-react";

const initialSuggestions = [
  {
    id: 1,
    name: "Ava Johnson",
    role: "Product Designer",
    mutual: 18,
    status: "available",
    avatar: "AJ",
    color: "from-violet-500 to-indigo-600",
  },
  {
    id: 2,
    name: "Daniel Brooks",
    role: "Frontend Engineer",
    mutual: 11,
    status: "requested",
    avatar: "DB",
    color: "from-cyan-500 to-sky-600",
  },
  {
    id: 3,
    name: "Lila Moore",
    role: "Community Lead",
    mutual: 24,
    status: "connected",
    avatar: "LM",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    name: "Noah Smith",
    role: "UX Researcher",
    mutual: 9,
    status: "available",
    avatar: "NS",
    color: "from-amber-500 to-orange-600",
  },
];

const initialRequests = [
  {
    id: 101,
    name: "Maya Patel",
    role: "Marketing Strategist",
    mutual: 15,
    avatar: "MP",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 102,
    name: "Ethan Lee",
    role: "Mobile Developer",
    mutual: 12,
    avatar: "EL",
    color: "from-blue-500 to-indigo-600",
  },
];

const ConnectPage = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [requests, setRequests] = useState(initialRequests);

  const connectedCount = useMemo(
    () => suggestions.filter((person) => person.status === "connected").length,
    [suggestions],
  );

  const pendingCount = useMemo(
    () => suggestions.filter((person) => person.status === "requested").length,
    [suggestions],
  );

  const filteredSuggestions = suggestions.filter((person) => {
    const haystack = `${person.name} ${person.role}`.toLowerCase();
    return haystack.includes(query.toLowerCase());
  });

  const handleConnect = (id) => {
    setSuggestions((current) =>
      current.map((person) =>
        person.id === id ? { ...person, status: "requested" } : person,
      ),
    );
  };

  const handleAccept = (id) => {
    setRequests((current) => current.filter((request) => request.id !== id));
    setSuggestions((current) =>
      current.map((person) =>
        person.id === id ? { ...person, status: "connected" } : person,
      ),
    );
  };

  const handleReject = (id) => {
    setRequests((current) => current.filter((request) => request.id !== id));
    setSuggestions((current) =>
      current.map((person) =>
        person.id === id ? { ...person, status: "rejected" } : person,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 text-slate-800 md:px-8 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-slate-900 via-violet-900 to-indigo-700 p-6 text-white shadow-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-violet-200">
              People network
            </p>
            <h1 className="text-3xl font-bold md:text-4xl">
              Connect with people
            </h1>
          </div>
          <button className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/15">
            <Users className="h-4 w-4" />
            Discover people
          </button>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Connected</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-3xl font-bold">{connectedCount}</span>
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                +12%
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Pending</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-3xl font-bold">{pendingCount}</span>
              <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
                Waiting
              </span>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Requests</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-3xl font-bold">{requests.length}</span>
              <span className="rounded-full bg-violet-100 px-2 py-1 text-xs font-semibold text-violet-700">
                New
              </span>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 md:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">Suggested for you</h2>
                <p className="text-sm text-slate-500">
                  People who match your interests
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                <Search className="h-4 w-4" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-28 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  placeholder="Search"
                  aria-label="Search suggested users"
                />
              </div>
            </div>

            <div className="space-y-4">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.map((person) => (
                  <div
                    key={person.id}
                    className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-violet-300 hover:bg-violet-50/60 md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${person.color} text-lg font-bold text-white shadow-md`}
                      >
                        {person.avatar}
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold">{person.name}</h3>
                        <p className="text-sm text-slate-500">{person.role}</p>
                        <p className="mt-1 text-xs font-medium text-violet-600">
                          {person.mutual} mutual connections
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start md:self-auto">
                      {person.status === "available" && (
                        <button
                          onClick={() => handleConnect(person.id)}
                          className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
                        >
                          <UserPlus className="h-4 w-4" />
                          Connect
                        </button>
                      )}

                      {person.status === "requested" && (
                        <button className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                          Requested
                        </button>
                      )}

                      {person.status === "connected" && (
                        <button className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                          Connected
                        </button>
                      )}

                      {person.status === "rejected" && (
                        <button className="rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-600">
                          Rejected
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-500">
                  No matches found for this search.
                </div>
              )}
            </div>
          </section>

          <aside className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200 md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Connection requests</h2>
                <p className="text-sm text-slate-500">
                  Respond to people who want to connect
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {requests.length > 0 ? (
                requests.map((person) => (
                  <div
                    key={person.id}
                    className="rounded-2xl border border-slate-200 p-4"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${person.color} text-sm font-bold text-white`}
                      >
                        {person.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold">{person.name}</h3>
                        <p className="text-sm text-slate-500">{person.role}</p>
                      </div>
                    </div>

                    <p className="mb-4 text-xs font-medium text-violet-600">
                      {person.mutual} mutual connections
                    </p>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAccept(person.id)}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                      >
                        <Check className="h-4 w-4" />
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(person.id)}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-rose-100 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-200"
                      >
                        <X className="h-4 w-4" />
                        Reject
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">
                  No pending requests right now.
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
