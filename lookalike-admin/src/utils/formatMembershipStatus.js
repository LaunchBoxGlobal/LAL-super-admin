const MEMBERSHIP_STATUS_LABELS = {
  all: "All",
  free_trial: "Free Trial",
  trial_expired: "Trial Expired",
  subscribed: "Subscribed",
  never_subscribed: "Never Subscribed",
};

export function formatMembershipStatus(status) {
  if (!status) return "—";

  return (
    MEMBERSHIP_STATUS_LABELS[status] ??
    status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}
