defmodule Atm.Repo do
  use Ecto.Repo,
    otp_app: :atm,
    adapter: Ecto.Adapters.Postgres
end
